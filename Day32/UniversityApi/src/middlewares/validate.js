const createValidator = require("../utils/schemaValidator");

const validate = (schema) => {
  const validateFn = createValidator(schema);

  return (req, res, next) => {
    const valid = validateFn(req.body);
    console.log("Validation result:", valid);
    if (!valid) {
      req.valid = false;
      return res.status(400).json({
        success: false,
        errors: validateFn.errors,
      });
    }
    req.valid = true;
    next();
  };
};

module.exports = validate;
