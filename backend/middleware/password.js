const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                            
.is().max(20)                               
.has().uppercase()                            
.has().lowercase()                             
.has().digits(2)                                
.has().not().spaces()
 
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
      next();
    } else {
      return (
        res.writeHead(
          400, "Votre mot de passe doit contenir entre 8 et 20 caractères, au moins 2 chiffres, une majuscule, une minuscule et ne doit pas contenir d'espace"
        ),
        res.end(
          "Votre mot de passe doit contenir entre 8 et 20 caractères, au moins 2 chiffres, une majuscule, une minuscule et ne doit pas contenir d'espace"
        )
      );
    }
  };