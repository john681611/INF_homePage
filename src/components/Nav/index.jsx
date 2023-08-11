import React, { useState } from 'react';


const Nav = props => {
    const [memberPass, setMemberPass] = useState(''),
        [isSubscribed, setIsSubscribed] = useState(0),
        [buttonState, setButtonState] = useState({ expand: false, text: 'Loading', disabled: true }),
        [errorMessage, setErrorMessage] = useState('');
    let subscription;
    navigator.serviceWorker.ready.then(async reg => {
        subscription = await reg.pushManager.getSubscription()
        setIsSubscribed(!(subscription === null));
        updateBtn();
    })

    async function sendSubToServer(subscription) {
        try {
            const result = await fetch(`https://ironfists.azurewebsites.net/${isSubscribed ? 'delete/' : ''}subscription`, {
                method: 'post',
                body: JSON.stringify(subscription),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            });
            if(result.status > 299) {
                throw result;
            }
        } catch (error) {
            if(!isSubscribed) {
                unsubscribeUser();
            }
            setButtonState({ expand:true, text: buttonState.text, disabled: buttonState.disabled });
            setErrorMessage(error.status === 401?'Bad Password' : 'Error Try Again');
            throw error;
        }
    }
    

    const convertToBasicObj = obj => JSON.parse(JSON.stringify(obj));

    async function subscribeUser() {
        const reg = await navigator.serviceWorker.ready;
        const subscription = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array(props.subKey)
        })
        await sendSubToServer(memberPass ? Object.assign({}, convertToBasicObj(subscription), { member: memberPass }) : subscription);
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
        } else if (!window.Notification || window.Notification.permission === 'denied') {
            text = 'Push Messaging Blocked.';
            disabled = true;
            unsubscribeUser();
        } else {
            text = `${isSubscribed ? 'Disable' : 'Enable'} Notifications`;
            disabled = false;
        }
        if (text !== buttonState.text || disabled !== buttonState.disabled) {
            setButtonState({ expand: buttonState.expand, text, disabled });
        }
    }

    function notificationButton() {
        isSubscribed ? unsubscribeUser() : subscribeUser();
    }

    function memberPassChange(event) {
        setMemberPass(event.target.value)
    }

    function onClick() {
        setButtonState({ expand: (buttonState.expand ? false : true), text: buttonState.text, disabled: buttonState.disabled });
    }

    return (
        <nav className="nav">
            <div className="nav__container">
                <a className="nav__container__logo" href="/#page-top">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 149.000000 175.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,175.000000) scale(0.100000,-0.100000)" fill="#FFF" stroke="none">
                            <path d="M50 1594 c0 -65 3 -85 13 -81 6 2 109 39 227 81 118 42 216 79 219
   81 2 3 -100 5 -227 5 l-232 0 0 -86z" />
                            <path d="M971 1675 c3 -2 101 -39 219 -81 118 -42 221 -79 228 -81 9 -4 12 16
   12 81 l0 86 -232 0 c-127 0 -229 -2 -227 -5z" />
                            <path d="M410 1550 c-168 -60 -315 -114 -327 -120 l-23 -10 0 -342 c0 -189 4
   -369 10 -401 33 -207 239 -406 569 -552 l100 -44 62 25 c152 62 326 168 431
   263 65 59 137 163 164 236 17 45 19 90 22 435 l3 385 -333 118 c-183 64 -342
   117 -353 116 -11 0 -157 -50 -325 -109z m918 -536 l-3 -350 -37 -75 c-21 -40
   -56 -95 -78 -121 -76 -88 -249 -203 -403 -269 l-70 -29 -114 54 c-257 124
   -416 277 -458 442 -13 50 -15 118 -13 380 l3 319 293 106 294 105 294 -105
   295 -106 -3 -351z" />
                            <path d="M688 1178 l-46 -123 -109 -7 c-187 -13 -178 -2 -73 -88 50 -41 98
   -80 106 -86 11 -9 8 -32 -21 -139 -19 -71 -33 -131 -31 -133 2 -2 52 29 111
   67 59 39 111 71 115 71 4 0 56 -32 115 -71 59 -38 109 -69 111 -67 2 2 -12 62
   -31 133 -29 107 -32 130 -21 139 8 6 56 45 106 86 105 86 114 75 -73 88 l-109
   7 -46 123 c-26 67 -49 122 -52 122 -3 0 -26 -55 -52 -122z" />
                            <path d="M50 281 l0 -211 258 0 257 0 -81 44 c-166 89 -303 201 -391 320 l-43
   58 0 -211z" />
                            <path d="M1392 440 c-43 -63 -171 -185 -251 -240 -35 -23 -100 -62 -145 -86
   l-81 -44 258 0 257 0 0 210 c0 116 -1 210 -2 210 -2 0 -18 -23 -36 -50z" />
                        </g>
                    </svg>
                    <b>Iron-Fists</b>
                </a>
                <label className="nav__container__menu-toggle" htmlFor="nav-menu">
                    Menu
               <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
                    </svg>
                </label>
            </div>

            <input type="checkbox" className="a11y" id="nav-menu" />
            <ul className="nav__elements">
                <li>
                    <a className="page-scroll" href="/#news">News</a>
                </li>
                <li>
                    <a className="page-scroll" href="https://discord.gg/sAjVrD3fS2">Diccord</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#about">About</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#join">Join</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#servers">Servers</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#rules">Rules</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#links">Links</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#cmdmsg">Command msg</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#roster">Roster</a>
                </li>
                <li>
                    <a className="page-scroll" href="/#donate">Donate</a>
                </li>
                <li>
                    <div className="notification-box">
                        <button className="notification" disabled={buttonState.disabled} onClick={notificationButton}>{buttonState.text}</button>
                        <button className={`notification-drop fa fa-chevron-${buttonState.expand ? 'up' : 'down'}`} disabled={buttonState.disabled} onClick={onClick}></button>
                    </div>
                </li>
            </ul>
            <div className={buttonState.expand ? 'notification-content is-expanded' : 'notification-content'}>
                <input type="password" placeholder="Member Notification password" onChange={memberPassChange} />
                <span className="notification-error">{errorMessage}</span>
            </div>
        </nav>
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

export default Nav