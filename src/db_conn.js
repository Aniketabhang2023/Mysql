var mysql = require('mysql'); 

var con = mysql.createConnection({ 
    host: "localhost", 
    user: "root", 
    password: "" ,
    database: "sbcc"
    
}); 

con.connect(function(err){ 
    if (err) { 
        console.error('Error connecting to MySQL:', err);
        con.connected = false;
     } 
        else { 
            console.log('Connected to MySQL'); 
            con.connected = true; 
        } 
    }); 

    con.connect(function (err) {     
        con.query("SELECT * FROM sbcct", function (err,result,fields) {        
            if (err) throw err;         
            console.log(result);    
        }) 
    });
        
    module.exports = con;