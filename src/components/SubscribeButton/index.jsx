import React from 'react'

const SubscribeButton = (props) => {
  const reg = await navigator.serviceWorker.ready;
  const subscription = reg.pushManager.getSubscription()
  isSubscribed = !(subscription === null);
  updateBtn();
  return (
    <li>
      <button className="notification" disabled={props.disabled}>{props.text}</button>
      <input type="password" placeholder="Member Notification password" />
    </li>
  )
}


function updateBtn() {
  if (Notification.permission === 'denied') {
    props.text = 'Push Messaging Blocked.';
    props.disabled = true;
    unsubscribeUser();
    return;
  }

  if (isSubscribed) {
    props.text = 'Disable Notifications';
  } else {
    props.text = 'Enable Notifications';
  }

  props.disabled = false;

}

function sendSubToServer(subscription) {
  let url = '/subscription';
  if (isSubscribed) {
    url = 'delete/subscription';
  }
  fetch(url, {
    method: 'post',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}


function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey); //eslint-disable-line no-undef
  const reg = await navigator.serviceWorker.ready;
  const subscription = reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  if(memberPass) {
    subscription.member = memberPass;
  }
  sendSubToServer(subscription);
  isSubscribed = true;
  updateBtn();
}

function unsubscribeUser() {
  const reg = await navigator.serviceWorker.ready;
  const subscription = reg.pushManager.getSubscription()
  if (subscription) {
    subscription.unsubscribe();
    sendSubToServer(subscription);
    isSubscribed = false;
    updateBtn();
  }
}

function urlB64ToUint8Array(base64String) {
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