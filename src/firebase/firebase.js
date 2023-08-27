import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
});

const firebaseDatabase = app.database();

export {
  firebaseDatabase
};