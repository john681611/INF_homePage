import React, { useState } from 'react';

function SubscribeButton (props) {
  const [memberPass, setMemberPass] = useState(''),
    [isSubscribed, setIsSubscribed] = useState(0),
    [subKey] = useState(urlB64ToUint8Array(props.subKey)),
    [disabledButton, setDisabledButton] = useState(true),
    [text, setText] = useState('Loading');
  let subscription;
  navigator.serviceWorker.ready.then(reg => {
    subscription = reg.pushManager.getSubscription()
    setIsSubscribed(!(subscription === null));
    updateBtn();
  })

  async function sendSubToServer(subscription) {
    let url = '/subscription';
    if (isSubscribed) {
      url = 'delete/subscription';
    }
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(subscription),
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }
  
  async function subscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: subKey
    })
    if (memberPass) {
      subscription.member = memberPass;
    }
    await this.sendSubToServer(subscription);
    setIsSubscribed(true);
    updateBtn();
  }
  
  async function unsubscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = reg.pushManager.getSubscription()
    if (subscription) {
      subscription.unsubscribe();
      await sendSubToServer(subscription);
      setIsSubscribed(false);
      updateBtn();
    }
  }
  
  function updateBtn() {
    if (Notification.permission === 'denied') {
    setText('Push Messaging Blocked.');
      setDisabledButton(true);
      unsubscribeUser();
      return;
    }
  
    if (isSubscribed) {
      setText('Disable Notifications');
    } else {
      setText('Enable Notifications');
    }
    setDisabledButton(false);
  }

  function notificationButton() {
    subscribeUser();
  }

  function memberPassChange (event) {
    setMemberPass(event.target.value)
  }


    return (
      <li>
        <button className="notification" disabled={disabledButton} onClick={() => notificationButton()}>{text}</button>
        <input type="password" placeholder="Member Notification password" onChange={memberPassChange} />
      </li>
    )
}



const urlB64ToUint8Array = base64String => {
  if(!base64String) {
    return null;
  }
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}


export default SubscribeButton