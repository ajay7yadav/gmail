const Inbox = require('../models/inbox_Schema');
const Outbox = require('../models/outbox_Schema');

exports.sendMail = async(req,res)=>{
    const obj = {
        subject : req.body.subject,
        email : req.body.email
    };

    try{
        const mail = await Inbox.create(obj);
        await Outbox.create(obj);
        res.status(201).send(mail);

    }catch(err){
        console.log(err);
        res.status(500).send({
            message : "Internal error !"
        });
    }
}

//searchMail from inbox or outbox its provide user api logic here
exports.searchMail = async(req, res) =>{
    let keyword = req.body.keyword;
    let searchSpace = req.body.searchSpace;

    try{
        let data;
        if(searchSpace == 'inbox'){
            data = await Inbox.find({'subject': {'$regex': keyword}}).sort({'_id': -1});
            if(!data){
                return res.status(404).send({
                    message : "Not found !"
                });
            }
        }
        else{
            data = await Outbox.find({'subject': {'$regex': keyword}}).sort({'_id': -1});
            if(!data){
                return res.status(404).send({
                    message : "Not found !"
                });
                
            }
        }
        res.status(200).send(data);

    }catch(err){
        res.status(500).send({
            message : "Internal error !"
        });
    }
};

//deleteMail from inbox api logic here
exports.deleteMail = async(req, res) => {
    // delete mail by mail_id
    const byId = req.params.id;
    try{
        const data = await Inbox.deleteOne({_id : byId});
        if(!data){
            return res.status(404).send({
                message : "Not found !"
            });
        }
        res.status(201).send({
            message : "Deleted"
        });
    }catch(err){
        res.status(500).send({
            message : "Internal error !"
        });
    }
    
};