const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    User_ID: {
      type: "number",
    },
    Name: {
      type: "string",
      pattern: "^[a-zA-Z]*$",
      maxLength: 10,
    },
    Age: {
      type: "number",
      maximum: 50,
      minimum: 18,
    },
    Country: {
      type: "number",
    },
    Subscription_Type: {
      type: "string",
    },
    Favorite_Genre: {
      type: "string",
      enum: ["Action", "Drama"],
    },
  },
  required: [
    "User_ID",
    "Name",
    "Age",
    "Country",
    "Subscription_Type",
    "Favorite_Genre",
  ],
  additionalProperties: false,
};
const validate = ajv.compile(schema);

module.exports = validate;
