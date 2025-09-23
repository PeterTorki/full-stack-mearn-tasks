module.exports = {
  type: "object",
  properties: {
    title: { type: "string", maxLength: 50 },
    department: { type: "string" }, // Department ObjectId as string
  },
  required: ["title", "department"],
  additionalProperties: false,
};
