var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alunofatec"
  });

  con.connect(function(error) {
    if(error){
        console.log('Error connecting to the MySQL Database');
        return;
      }
    console.log("Connected!");
    con.query("SELECT * FROM dbQualquer.testeDb", function (error, result, fields) {
        if(error){
            console.log('Error connecting to the MySQL Database');
            return;
          }
        console.log(result);
      });

      con.end()

  });


