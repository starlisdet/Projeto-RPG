// import { firebase } from "./firebase";

import { dataBase } from "./firebase";

var app = {

  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function() {
      document.getElementById("btnInserir").addEventListener("click",app.inserir);
  },

  inserir: function(){
      event.preventDefault();

      let cname = document.getElementById("name").value;
      let cemail = document.getElementById("email").value;
      let cpassword = document.getElementById("password").value;

      console.log("Teste")

    var db = dataBase
    console.log(db)

    //   db.collection("user").add({
    //       name: cname,
    //       email: cemail,
    //       password: cpassword,
    //   })
    //   .then((docRef) =>{
    //       window.location.href = cordova.file.applicationDirectory + "www/index.html";
    //   })
    //   .catch((error) => {
    //       console.error("Error adding document: ", error);
    //   });
  }

};

app.initialize();
