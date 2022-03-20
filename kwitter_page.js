//YOUR FIREBASE LINKS
var firebaseConfig = {

    apiKey: "AIzaSyDQlzM_jl0rpgP_uQATXGUzgmx1Z2XI43w",
  
    authDomain: "kwitter-d39bf.firebaseapp.com",
  
    databaseURL: "https://kwitter-d309bf-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-d39bf",
  
    storageBucket: "kwitter-d39bf.appspot.com",
  
    messagingSenderId: "816245205067",
  
    appId: "1:816245205067:web:35aad976da17a796c645ce"
  
  };
  
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
    
}