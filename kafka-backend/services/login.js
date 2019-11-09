// var Model = require('../DatabaseConnection');
var bcrypt = require('bcrypt');
// var bcrypt = require('bcrypt');

var StudentLogin = require('../models/Studentdet');
var Facultydetails = require('../models/Facultydetails');

function handle_request(msg, callback){
    console.log('Inside  Kafka Backend Login');
    console.log('Message', msg);

    if(msg.stufac=="faculty"){
        console.log("in jwt requests",msg)
        Facultydetails.findOne({
                facultyid: msg.username
            }, function (err, user) {
                 if (user) {
                    if (!bcrypt.compareSync(msg.password, user.password)) 
                    {
                        console.log("Invaid Credentials");
                        callback(null,null)
                    }
                    else{
                        console.log("in user",user)
                        callback(null,user)
                    }
                }
                else if(err){
                    console.log(err)
                }
                else{
                    console.log("null")
                    callback(null,null);
                }
            });
    }
    else{
        console.log("in jwt requests",msg)
        StudentLogin.findOne({
                studentid: msg.username
            }, function (err, user) {
                console.log(user)
                 if (user) {
                    if (!bcrypt.compareSync(msg.password, user.password)) 
                    {
                        console.log("Invaid Credentials");
                        callback(null,null)
                    }
                    else{
                        console.log("login sucees")
                        callback(null,user)
                    }
                }
                else{
                    console.log("no valid input")
                    
                
                    console.log("no valid input")
                    callback(null,false);
                }
            });
    }
}

exports.handle_request = handle_request;