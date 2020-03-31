importScripts(`/service-worker.js`)

self.addEventListener('push', event => {
    const title = 'Iron-Fists';
    const data = JSON.parse(event.data.text());
    const options = {
        body: `${data.message}`,
        icon: '/images/logo-desktop.png',
        badge: '/images/logo-desktop.png',
        data: data.url || 'https://www.iron-fists.co.uk/#news'
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data)
    );
});