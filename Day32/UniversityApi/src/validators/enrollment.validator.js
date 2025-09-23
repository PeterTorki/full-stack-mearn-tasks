module.exports = {
  type: "object",
  properties: {
    student: { type: "string" },
    course: { type: "string" },
  },
  required: ["student", "course"],
  additionalProperties: false,
};
