// firebase requirements
let firebase = require('firebase');
let admin = require('firebase-admin');
let serviceAccount = require('./firebase.json');

// initialize firebase admin for database access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comp308-w2017-lesson10b.firebaseio.com"
})

// initialize firebase app
let config = {
    apiKey: "AIzaSyC2O3sb5sFay340tLzaFI-5cKhONx5KMrc",
    authDomain: "comp308-w2017-lesson10b.firebaseapp.com",
    databaseURL: "https://comp308-w2017-lesson10b.firebaseio.com",
    storageBucket: "comp308-w2017-lesson10b.appspot.com",
    messagingSenderId: "575267118156"
  };
  firebase.initializeApp(config);

let firebaseDB = admin.database();

module.exports.games = firebaseDB.ref("games");

module.exports.admin = admin;

module.exports.auth = firebase.auth();
