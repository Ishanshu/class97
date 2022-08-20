const firebaseConfig = {
    apiKey: "AIzaSyDcKqPIOruFu88JjF1t-w1IWexjkhb1AWE",
    authDomain: "kwitter-22c5b.firebaseapp.com",
    databaseURL: "https://kwitter-22c5b-default-rtdb.firebaseio.com",
    projectId: "kwitter-22c5b",
    storageBucket: "kwitter-22c5b.appspot.com",
    messagingSenderId: "867407328362",
    appId: "1:867407328362:web:75674cc639416f7ed3c613"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser()
 {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
 }
