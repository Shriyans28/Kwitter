//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDiIZ1U8zEFMvlUZngL2shNtreKOCpWudk",
      authDomain: "kwitter-24f40.firebaseapp.com",
      databaseURL: "https://kwitter-24f40-default-rtdb.firebaseio.com",
      projectId: "kwitter-24f40",
      storageBucket: "kwitter-24f40.appspot.com",
      messagingSenderId: "831468746959",
      appId: "1:831468746959:web:e3596a1db7abceedde5fba"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}