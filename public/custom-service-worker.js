importScripts(`/service-worker.js`)

self.addEventListener('push', event => {
    const title = 'Iron-Fists';
    const data = JSON.parse(event.data.text());
    const options = {
        body: `${data.message}`,
        icon: '/img/logo-desktop.png',
        badge: '/img/logo-desktop.png',
        data: data.url || 'http://ironfists.azurewebsites.net/#news'
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data)
    );
});