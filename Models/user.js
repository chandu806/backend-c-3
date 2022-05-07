const mongoose = require("mongoose");
const { stringify } = require("uuid");

const user = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String,required:true},
    age: { type: Number, required: true },
    email: { type: String, required: true },
    profileimage: { type: String, required: true },
    password: { type: String, required: true },
    idbook: [{ type: mongoose.Types.ObjectId, ref: "books" }],
    idcomments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
  },
  {
    timestamps: { created: true, updated: true },
  }
);

module.exports = mongoose.model("user", user);