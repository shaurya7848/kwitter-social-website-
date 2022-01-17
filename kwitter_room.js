// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDDW2SFxMIzE6EGiNhuiRmHEpuMCXrxcnY",
      authDomain: "kwitter-shaurya-9b245.firebaseapp.com",
      databaseURL: "https://kwitter-shaurya-9b245-default-rtdb.firebaseio.com",
      projectId: "kwitter-shaurya-9b245",
      storageBucket: "kwitter-shaurya-9b245.appspot.com",
      messagingSenderId: "453851235872",
      appId: "1:453851235872:web:bb6690b809fee913b59e45"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "   +  user_name + " !";

    function addRoom(){
          room_name = document.getElementById("room_name").Value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:"adding room name"
            });
            localStorage.setItem("room_name",room_name);
            window.location = "kwitter_page.html";

    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room name - "+ Room_names);
            row = "<div class = 'room_name' id= "+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location  = "index.html";
}