import React, { useState } from 'react';
function SubscribeButton (props) {
  const [memberPass, setMemberPass] = useState(''),
    [isSubscribed, setIsSubscribed] = useState(0),
    [buttonState, setButtonState] = useState({expand: false, text: 'Loading', disabled: true})
  let subscription;
    navigator.serviceWorker.ready.then(async reg => {
      subscription = await reg.pushManager.getSubscription()
      setIsSubscribed(!(subscription === null));
      updateBtn();
    })

  async function sendSubToServer(subscription) {
    try {
      await fetch(`https://ironfists.azurewebsites.net/${isSubscribed ? 'delete/' : ''}subscription`, {
        method: 'post',
        body: JSON.stringify(subscription),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    } catch (error) {
      if(!isSubscribed) {
        subscription.unsubscribe();
      }
      throw error;
    }
  }
  
  async function subscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(props.subKey)
    })
    if (memberPass) {
      subscription.member = memberPass;
    }
    await sendSubToServer(subscription);
    setIsSubscribed(true);
    updateBtn();
  }
  
  async function unsubscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = await reg.pushManager.getSubscription();
    if (subscription) {
      subscription.unsubscribe();
      await sendSubToServer(subscription);
      setIsSubscribed(false);
      updateBtn();
    }
  }
  
  function updateBtn() {
    let text = buttonState.text;
    let disabled = buttonState.disabled;
    if (!props.subKey) {
      disabled = true;
      text = 'Key Not Passed';
    } else if (Notification.permission === 'denied') {
      text = 'Push Messaging Blocked.';
      disabled = true;
      unsubscribeUser();
    } else {
      text = `${isSubscribed ? 'Disable' : 'Enable'} Notifications`;
      disabled = false;
    }
    if(text !== buttonState.text || disabled !== buttonState.disabled) {
      setButtonState({expand: buttonState.expand, text, disabled});
    }
  }

  function notificationButton() {
    isSubscribed ? unsubscribeUser() :  subscribeUser();
  }

  function memberPassChange (event) {
    setMemberPass(event.target.value)
  }

  function onClick() {
    setButtonState({expand: (buttonState.expand ? false : true), text: buttonState.text, disabled: buttonState.disabled});
  }


    return (
      <li>
        <div className="notification-box">
          <button className="notification" disabled={buttonState.disabled} onClick={notificationButton}>{buttonState.text}</button>
          <button className={`notification-drop fa fa-chevron-${buttonState.expand ? 'up' :'down'}`} disabled={buttonState.disabled} onClick={onClick}></button>
        </div>
        <div className={buttonState.expand ? 'notification-content is-expanded' : 'notification-content'}>
          <input type="password" placeholder="Member Notification password" onChange={memberPassChange} />
        </div>
      </li>
    )
}



const urlB64ToUint8Array = base64String => {
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