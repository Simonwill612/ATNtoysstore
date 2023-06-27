var admin = require("mongoose-admin");

/*
Firebase service account
firebase-adminsdk-z72y4@webcloud-53c9b.iam.gserviceaccount.com
*/

//var serviceAccount = require("./webcloud-53c9b-firebase-adminsdk-z72y4-e4bb8c3b00.json");
// var serviceAccount = require("./cloudproject-985f9-firebase-adminsdk-cwlzz-dbb712c361.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL:"https://cloudproject-985f9-default-rtdb.firebaseio.com"
// });
const mongoose = require('mongoose');

const userName = "trungtinlethai";
const userPassword = "210085";

const dbName = "ATNtoys";
 

const url = "mongodb+srv://trungtinlethai:210085.@simonwill.n4dqsyu.mongodb.net/" +
    userName + ":" + userPassword +     
    "@simonwill.n4dqsyu.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

var db = admin.database();

const ref = db.ref('/User');

const childref = ref.child('2000');

childref.set({
	LTTTin: {
		birthday: "6/12/1979",
		fullname: "LTTT"
	}
	
});