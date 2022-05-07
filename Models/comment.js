const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    body: { type: String,required:true },
  },
  {
    timestamps: { created: true, updated: true },
  }
);

module.exports = mongoose.model("user", user);