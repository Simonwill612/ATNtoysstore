 //Nhớ cài Mongoose
 // npm      i       --S      mongoose
const mongoose = require('mongoose');
const userName = "trungtinlethai";
const userPassword = "210085";

const dbName = "ATN_shop";
 

const url = `mongodb+srv://trungtinlethai:210085.@simonwill.n4dqsyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority${userName}:${userPassword}@simonwill.n4dqsyu.mongodb.net/${dbName}?retryWrites=true&w=majority`;

 
 

///////////////////////////////////////////////////a




/////////////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}
