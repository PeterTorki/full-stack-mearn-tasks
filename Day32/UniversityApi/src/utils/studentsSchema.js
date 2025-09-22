const Ajv = require("ajv");
const ajv = new Ajv();

const studentSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z ]*$", maxLength: 20 },
    age: { type: "number", maximum: 100, minimum: 10 },
    courses: { type: "array", items: { type: "string" } },
    department: { type: "string" },
  },
  required: ["name", "age"],
  additionalProperties: false,
};

const validateStudent = ajv.compile(studentSchema);
module.exports = validateStudent;
