importScripts(`/service-worker.js`)

self.addEventListener('push', function (e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/logo-desktop.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
});



self.addEventListener('notificationclose', function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    console.debug('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    var action = e.action;
    console.debug('Clicked notification: ' + primaryKey);
    if (action === 'close') {
        console.debug('Notification clicked and closed', primaryKey);
        notification.close();
    }
    else {
        console.debug('Notification actioned', primaryKey);
        notification.close();
    }
});