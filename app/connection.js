var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "alunofatec"
  });

  con.connect(function(error) {
    if(error){
        console.log('Error connecting to the MySQL Database');
        return;
      }
    console.log("Connected!");
    con.query("SELECT * FROM projetorpg.user", function (error, result, fields) {
        if(error){
            console.log('Error connecting to the MySQL Database');
            return;
          }
        console.log(result);
      });

      con.end()

  });


