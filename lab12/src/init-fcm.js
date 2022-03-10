import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyCJxeiirujWdFf1IF-EXCQ8IFQwn25EAyg",
  authDomain: "react-sec02-061.firebaseapp.com",
  projectId: "react-sec02-061",
  storageBucket: "react-sec02-061.appspot.com",
  messagingSenderId: "671192110780",
  appId: "1:671192110780:web:ea37027e8bf6d20ecca2b9"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BLxbfXP9whnBoEotQoJCPMZK1M2-fTkL52TBlX2MvVjp5LdAiowFXShqF3GPjMQSyFCP6h0LsS1U7eA3FAwTwoU"
);

export { messaging };
