module.exports = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 50 },
    age: { type: "number", minimum: 16, maximum: 100 },
    department: { type: "string" }, // Department ObjectId as string
    active: { type: "boolean", default: true },
  },
  required: ["name", "age", "department"],
  additionalProperties: false,
};
