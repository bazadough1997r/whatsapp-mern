const mongoose = require("mongoose");

//define data schema
const whatsappSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  recieved: Boolean
});

module.exports = mongoose.model("messagecontents", whatsappSchema);
const Messages = mongoose.model("messagecontents", whatsappSchema);
module.exports = { Messages };
