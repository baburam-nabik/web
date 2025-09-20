importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAK_1GcvSa0HzN1hOzpeKjmrEKWqyA3OxA",
    authDomain: "fmlapp-164308.firebaseapp.com",
    projectId: "fmlapp-164308",
    storageBucket: "fmlapp-164308.appspot.com",
    messagingSenderId: "191414083868",
    appId: "1:191414083868:web:3ff379f63efc397ed91ad9",
    measurementId: "G-CSPSGMKYY0"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Change this path as needed
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
