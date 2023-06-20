
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyAI_YB2E7rwNZlYGfgEeYiNx3DDvVI1ISE",
      authDomain: "kwitter-f5404.firebaseapp.com",
      databaseURL: "https://kwitter-f5404-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5404",
      storageBucket: "kwitter-f5404.appspot.com",
      messagingSenderId: "907221925072",
      appId: "1:907221925072:web:140ec7933da193f21ab2d5",
      measurementId: "G-GTXXMDZFE2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
