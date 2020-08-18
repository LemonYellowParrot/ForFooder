var express = require('express');
var app = express();
var router = require('./router/main')(app);
var mysql = require('mysql')
var url = require('url');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var connection = mysql.createConnection({
    host:"*********",
    port: '****',
    user: "****",
    password:"****",
    database:"********"
})

connection.connect(function(err){  
    /*    if(!err) {  
            console.log("Database is connected ... \n\n");    
        } else {  
            console.log("Error connecting database ... \n\n");    
        }*/
        if(err) throw err;
        
        });  

        app.get('/search', function(req, res){
            var uri = req.url;
            var query = url.parse(uri,true).query;
            var sql = 'select * from food where country like CONCAT( \'%\',"'+query.countryname+'",\'%\')';
            connection.query(sql, function(err, rows,fields){
                if(err) {
                    console.log(err)
                }
                if( rows == "" || rows == null || rows == undefined || ( rows != null && typeof rows == "object" && !Object.keys(rows).length ) ){
                    res.write('<html>');
                    res.write('<body>');
                    res.write('<button onclick="history.back()">Back</button>')
                    res.write('<br><br><h1>No data</h1>')
                    res.write('</body>');
                    res.write('</html>');
                    res.end()
                }
                else{
                    var i;
                    res.write('<html>');
                    res.write('<body>');
                    res.write('<button onclick="history.back()">Back</button>')
                   for(i=0;i<5;i++){
                    
                        res.write('<br><br><img src="'+rows[i].photourl+'"/><br>'+'<br>')
                        res.write('country name: '+rows[i].country+'<br>');
                        res.write('food name: '+rows[i].food+'<br>');
                        res.write('food explaination: '+rows[i].foodexplain+'<br>'+'<br>');
                    
                }
                    res.write('</body>');
                    res.write('</html>');
                    res.end();
                }
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
