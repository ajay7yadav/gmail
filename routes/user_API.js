const controller = require('../controllers/user_C');
const validation = require('../middlewares/validation_user');

module.exports = (ap)=>{

    ap.post('/gmailClone/v1/users/signup',[validation.valid],controller.signUp);

    ap.post('/gmailClone/v1/users/signin',controller.signIn);

}