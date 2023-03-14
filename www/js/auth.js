localStorage.setItem('name', null);
localStorage.setItem('email', null);
localStorage.setItem('password', null);

var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("login").addEventListener("click",app.auth);
    },

    auth: function(){
        event.preventDefault();

        let cemail = document.getElementById("email").value;
        let cpassword = document.getElementById("password").value;

        var db = firebase.firestore();
        var ag = db.collection("user").where("email", "==", cemail).where("password", "==", cpassword);

        ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                localStorage.setItem('name', doc.data().name);
                localStorage.setItem('email', doc.data().email);
                localStorage.setItem('password', doc.data().password);
            });
            
            document.getElementById("box-loader").classList.remove("d-none")

            setTimeout(function() {
                window.location.href = cordova.file.applicationDirectory + "www/inicial.html";
            }, 2500)
        })
        .catch((error) => {
            console.log("E-mail não existe: " + error);
        });
    }

};

app.initialize();