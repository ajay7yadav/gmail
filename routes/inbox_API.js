const controller = require('../controllers/inbox');
const verifyJWT = require('../middlewares/verifyJWT');

module.exports = (app)=>{

    app.post('/gmailClone/v1/inbox/mail',[verifyJWT.token],controller.sendMail);

    app.post('/gmailClone/v1/inbox/search',[verifyJWT.token],controller.searchMail);

    app.delete('/gmailClone/v1/inbox/delete/:id',[verifyJWT.token],controller.deleteMail);

}


//