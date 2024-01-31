const mongoose = require("mongoose")

const schema = mongoose.Schema({
  // TODO: Add a name (String) and a cost (Number).
  name: String,
  cost: Number
})

module.exports = mongoose.model("Product", schema)