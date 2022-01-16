const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
  name: String,
  emailAddress: String
});

const Pizza = mongoose.model("Email", emailSchema);

module.exports = {
  schema: emailSchema,
  model: Pizza
};
