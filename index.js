// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCE-BmTtIaL_Af3-4aCwKw80hMu5P4Awzc",
    authDomain: "gestion-comunidas.firebaseapp.com",
    databaseURL: "https://gestion-comunidas-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gestion-comunidas",
    storageBucket: "gestion-comunidas.appspot.com",
    messagingSenderId: "918528269629",
    appId: "1:918528269629:web:3de7356309b856a5043954",
    measurementId: "${config.measurementId}"
};
firebase.initializeApp(config);
var app = document.getElementById('app')
var dbRef = firebase.database()
var messageRef =dbRef.ref('message')
messageRef.once('value').then(function(snap){
    app.innerText= snap.val()
})
