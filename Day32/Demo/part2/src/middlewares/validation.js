const validate = require("../utils/schema");

module.exports = (req, res, nxt) => {
  const data = req.body;
  const valid = validate(data);
  req.valid = valid;
  nxt();
};
