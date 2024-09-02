// models/urlModel.js

const mongoose = require('mongoose');
const urlSchema = require('../schemas/urlSchema');

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
