/*const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find().toArray().then((users) => {
				response.data = users;
			    res.json(response);
            }).catch((err) => {
                sendError(err, res);
            });
    });
});
// Get users
router.post('/insertuser', (req, res) => {

		var doc = { name: req.body.name };
        connection((db) => {db.collection("users").insertOne(doc, function(err, res) {
        
		doc = "";
		
		if (err) 
		throw err;
 
        // close the connection to db when you are done with it
        db.close();
   });
   });
	//console.log(req.body);
});*/

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:'',
  database: "studentdetails"
});

con.connect(function(err) {  
      if (err) 
	  throw err;
      console.log("Connected");
  
	  /*if (err) throw err;
	  console.log("Connected!");
	  var sql = "INSERT INTO users (name) VALUES ('Company Inc')";
	  con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("1 record inserted");
	  });*/
  
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

//Insert User////////////////////////////
router.post('/insertdata', function (req, res) {	
	var sql = "INSERT INTO users (name) VALUES ('"+req.body.name+"')";
	  con.query(sql, function (err, result) {
		if (err)
   	   throw err;  
       
	console.log("1 record inserted");
 });
});
////////////////////////////////

//delete user start

router.post('/deletedata', function (req, res) {
  
  var sql = "Delete from users where User_Id = '"+ req.body.User_Id +"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  console.log("1 record deleted");
  
  });
});

//delete user end

//Update user

router.post('/UpdateUser', function (req, res) {
  
  var sql = "Update users set name  = '"+ req.body.name +"' where User_Id = '"+ req.body.User_Id +"'";
  con.query(sql, function (err, result) {
  if (err)
   throw err;
  console.log("1 record updated");
  
  });
});

//update user


// Get users//////////////////////////
router.get('/users', (req, res) => {
   	
	var sql = "select * from users";
	con.query(sql,function(err,rows){
		if(err) 
		{
          sendError(err, res);
        }		
		response.data = rows;
        res.json(response);
     })
});
///////////////////////////////////////


module.exports = router;


