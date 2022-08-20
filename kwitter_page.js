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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>"+name+"<img class='user_ticket' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
            like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thums-up'>Like: "+Like +"</span></button><hr>";
                        
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  } }); }); }
getData();
function updateLike(message_id)
            {
                  consolelog("clicked on like button - " + message_id);
                  button_id = message_id;
                  likes = document.getElementById(button_id).value;
                  update_likes = Number(likes) + 1;
                  console.log(update_likes);

                  firebase.database().ref(room_name).child(message_id).update({
                        like : update_likes
                  });
            }
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}