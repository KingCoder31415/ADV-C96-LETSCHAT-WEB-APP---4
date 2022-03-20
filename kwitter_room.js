
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

	apiKey: "AIzaSyCbsvYfsFPg96BD5hStsygcOXHsqs2OPy8",
  
	authDomain: "project94-3ed81.firebaseapp.com",
  
	databaseURL: "https://project94-3ed81-default-rtdb.firebaseio.com",
  
	projectId: "project94-3ed81",
  
	storageBucket: "project94-3ed81.appspot.com",
  
	messagingSenderId: "302447021769",
  
	appId: "1:302447021769:web:3bb80997718f7ad0f1c718"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
function addRoom() {
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
		  purpose: "Adding the Room Name"
	});
	localStorage.setItem("room_name", room_name);
	window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
	document.getElementById("user_name").innerHTML = "Welcome " + user_name;      
	Room_names = childKey;
	//Start code
	console.log(room_name);
	row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div><hr>"
	document.getElementById("output").innerHTML += row;    
	//End code
	});});}
getData();

function redirectToRoomName() {
	console.log(name);
	localStorage.setItem("room_name", room_name);
	window.location = "kwitter_page.htmls"
}