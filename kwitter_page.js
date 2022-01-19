const firebaseConfig = {
      apiKey: "AIzaSyCupqjuu_p6PgGPAvBfPHnmX8tRZNtorQI",
      authDomain: "temp-f1b9a.firebaseapp.com",
      databaseURL: "https://temp-f1b9a-default-rtdb.firebaseio.com",
      projectId: "temp-f1b9a",
      storageBucket: "temp-f1b9a.appspot.com",
      messagingSenderId: "215822081368",
      appId: "1:215822081368:web:d41d58e9af5082485d592d"
    };

    firebase.initializeApp(config);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
