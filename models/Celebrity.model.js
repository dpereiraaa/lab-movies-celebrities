const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebrityModel = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    catchPhrase: { type: String, required: true },
  }
);

const Celebrity = mongoose.model("Celebrity", celebrityModel);

module.exports = Celebrity;