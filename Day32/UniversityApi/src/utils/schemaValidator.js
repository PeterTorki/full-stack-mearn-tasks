const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });

function validator(schema) {
  const validate = ajv.compile(schema);
  return (req, res, next) => {
    const valid = validate(req.body);
    if (!valid) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validate.errors,
      });
    }
    next();
  };
}

module.exports = validator;
