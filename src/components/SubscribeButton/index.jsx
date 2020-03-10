import React, { Component } from 'react';

class SubscribeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      text: 'Loading',
      memberPass: '',
      isSubscribed: false,
      applicationServerPublicKey: urlB64ToUint8Array(props.subKey)
    };
  }

  async sendSubToServer(subscription) {
    let url = '/subscription';
    if (this.state.isSubscribed) {
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

  async subscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: this.state.applicationServerPublicKey
    })
    if (this.state.memberPass) {
      subscription.member = this.state.memberPass;
    }
    await this.sendSubToServer(subscription);
    this.state.isSubscribed = true;
    this.setState(this.state);
    this.updateBtn();
  }

  async unsubscribeUser() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = reg.pushManager.getSubscription()
    if (subscription) {
      subscription.unsubscribe();
      await this.sendSubToServer(subscription);
      this.state.isSubscribed = false;
      this.setState(this.state);
      this.updateBtn();
    }
  }

  updateBtn() {
    const state = this.state;
    if (Notification.permission === 'denied') {
      state.text = 'Push Messaging Blocked.';
      state.disabled = true;
      this.unsubscribeUser();
      return;
    }

    if (this.state.isSubscribed) {
      state.text = 'Disable Notifications';
    } else {
      state.text = 'Enable Notifications';
    }
    state.disabled = false;
    this.setState(state);
  }

  async componentDidMount() {
    const reg = await navigator.serviceWorker.ready;
    const subscription = reg.pushManager.getSubscription()
    this.state.isSubscribed = !(subscription === null);
    this.setState(this.state);
    this.updateBtn();
  }

  render() {
    return (
      <li>
        <button className="notification" disabled={this.state.disabled}>{this.state.text}</button>
        <input type="password" placeholder="Member Notification password" />
      </li>
    )
  }
}

const urlB64ToUint8Array = base64String => {
  if(!base64String) {
    console.log(`No Key sent: ${base64String}`)
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