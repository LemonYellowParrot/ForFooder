var mysql = require('mysql')

var connection = mysql.createConnection({
    host:"localhost",
    port: '3307',
    user: "root",
    password:"Pami1227!*",
    database:"fooddata"
})
connection.connect(function(err){  
    if(!err) {  
        console.log("Database is connected ... \n\n");    
    } else {  
        console.log("Error connecting database ... \n\n");    
    }  
    });  
      

