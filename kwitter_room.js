
//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi0T-LtFdYu-xJtYFgxjJ62Fjb59HDLag",
  authDomain: "kwitter-d4192.firebaseapp.com",
  projectId: "kwitter-d4192",
  storageBucket: "kwitter-d4192.appspot.com",
  messagingSenderId: "769665349520",
  appId: "1:769665349520:web:76a5619d38fc163f232515"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
