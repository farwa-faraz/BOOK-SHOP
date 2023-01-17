var firebaseConfig = {
    apiKey: "AIzaSyDVuAqfh6Z-S_uf0HCRzDhqRuLBmf5xsW8",
    authDomain: "book-shop-bc426.firebaseapp.com",
    databaseURL: "https://book-shop-bc426-default-rtdb.firebaseio.com",
    projectId: "book-shop-bc426",
    storageBucket: "book-shop-bc426.appspot.com",
    messagingSenderId: "409908382405",
    appId: "1:409908382405:web:f23a0734f74e07a8ef7eac"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user = localStorage.getItem("user")
room = localStorage.getItem("room")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room).push({
            message:msg,
            like:0,
            name:user
      });

document.getElementById("msg").value = " ";
}




function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("Output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data["name"]
message=message_data["message"]
like=message_data["like"]

name_tag = "<h4>"+ name +"<img class='user_tick' src='icon.png'></h4>";
message_tag = "<h4 class='message_h4'>"+ message + "</h4>";
button_1 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
button_2 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span> </button> <hr>";

row = name_tag + message_tag + button_1 + button_2;
document.getElementById("Output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) 
{     
      button_id = message_id; 
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1; 
      console.log(updated_likes); 
      firebase.database().ref(room).child(button_id).update({ like : updated_likes }); 
}

function logout()
{
      window.location = "community_login.html";
}