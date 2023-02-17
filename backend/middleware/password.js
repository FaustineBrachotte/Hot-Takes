const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(20)                                  // Maximum length 20
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
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