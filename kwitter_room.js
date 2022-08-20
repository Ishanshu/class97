var firebaseConfig = {
      apiKey: "AIzaSyDcKqPIOruFu88JjF1t-w1IWexjkhb1AWE",
      authDomain: "kwitter-22c5b.firebaseapp.com",
      databaseURL: "https://kwitter-22c5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-22c5b",
      storageBucket: "kwitter-22c5b.appspot.com",
      messagingSenderId: "867407328362",
      appId: "1:867407328362:web:75674cc639416f7ed3c613"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}