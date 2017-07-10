var config = {
    apiKey: "AIzaSyBG9uRRJ67X7v86VHZPAtLV76pJ5s-YorY",
    authDomain: "homework-b1a70.firebaseapp.com",
    databaseURL: "https://homework-b1a70.firebaseio.com",
    projectId: "homework-b1a70",
    storageBucket: "",
    messagingSenderId: "563306590864"
};

firebase.initializeApp(config);

var database = firebase.database();


var name = "";
var 

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function(snap) {
  // If they are connected..
  if (snap.val()) {
    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});


connectionsRef.on("value", function(snap) {
  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#NumberTest").html(snap.numChildren());
  console.log("soemthing");
});



var name = "";