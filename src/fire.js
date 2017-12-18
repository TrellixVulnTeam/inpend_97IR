import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCXl33WBUP3EPyznZMfUkPXmE88IzZrEG8",
    authDomain: "inpend-7a2c9.firebaseapp.com",
    databaseURL: "https://inpend-7a2c9.firebaseio.com",
    projectId: "inpend-7a2c9",
    storageBucket: "inpend-7a2c9.appspot.com",
    messagingSenderId: "884718036402"
};
var fire = firebase.initializeApp(config);
export default fire;