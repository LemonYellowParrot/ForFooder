var express = require('express');
var app = express();
var router = require('./router/main')(app);
var mysql = require('mysql')
var url = require('url');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var connection = mysql.createConnection({
    host:"localhost",
    port: '3306',
    user: "root",
    password:"0000",
    database:"fooooder"
})

connection.connect(function(err){  
    /*    if(!err) {  
            console.log("Database is connected ... \n\n");    
        } else {  
            console.log("Error connecting database ... \n\n");    
        }*/
        if(err) throw err;
        
        });  

        app.get('/Login', function(req, res){
            var uri = req.url;
            var query = url.parse(uri,true).query;
            console.log(query.countryname);
            var sql = 'select * from food where country = "'+query.countryname+'"';
            connection.query(sql, function(err, rows,fields){
                if(err) console.log(err);
                console.log('rows', rows);
               // console.log('fields',fields)
            })
        
        })



var server = app.listen(9999, function(){
    console.log("Express server has started on port 9999")
    app.use('/js', express.static('js'));
    app.use('/css',express.static('css'));
    app.use(express.static('public'));
    app.use(express.static('views'));
  
    //app.use('/views',express.static(__dirname + "/script"));
});
