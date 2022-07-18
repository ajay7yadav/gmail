const mongoose = require('mongoose');

const Inbox = new mongoose.Schema({
    subject : {
        type : String
    },
    email : {
        type : String
    },
    date : {
        type : Date,
        default : ()=>{
            return Date.now()
        },
        immuted : true
    },
    user : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'users'
    }
});

module.exports = mongoose.model('inbox',Inbox);