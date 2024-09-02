const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  full_url: {
    type: String,
    required: true,
  },
  shorten_url: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = urlSchema;
