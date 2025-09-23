module.exports = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 50 },
    location: { type: "string", maxLength: 100 },
  },
  required: ["name", "location"],
  additionalProperties: false,
};
