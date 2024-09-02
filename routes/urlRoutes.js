const express = require('express');
const router = express.Router();

module.exports = (urlController) => {
  router.post('/shorten', (req, res) => urlController.shortenUrl(req, res));
  router.get('/:shorten_url', (req, res) => urlController.redirect(req, res));
  return router;
};
