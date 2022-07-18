const mongoose = require('mongoose');

const Outbox = new mongoose.Schema({
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

module.exports = mongoose.model('outbox',Outbox);