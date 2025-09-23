const Ajv = require("ajv");

const ajv = new Ajv();

const createValidator = (schema) => ajv.compile(schema);

module.exports = createValidator;
