const passwordValidator = require('password-validator');

// Create a schema
const passwordSchema = new passwordValidator();

// Add properties to it
passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(20)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()
.has().not().oneOf(['=', '$', '{']);
 
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    } else {
        return (
            res.status(400).json({ error: passwordSchema.validate(req.body.password, { details: true }) }));
    }
};

/*module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
      next();
    } else {
      return (
        res.writeHead(
          400,
          "Votre mot de passe doit contenir entre 8 et 16 caractères et 2 chiffres"
        ),
        res.end(
          "Votre mot de passe doit contenir entre 8 et 16 caractères et 2 chiffres"
        )
      );
    }
  };*/