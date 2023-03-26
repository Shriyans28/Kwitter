
//ADD YOUR FIREBASE LINKS HERE

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

   user_name = localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML = "Welcome "+user_name;

      function addRoom(){
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}