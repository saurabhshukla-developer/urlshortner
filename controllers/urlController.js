class UrlController {
    constructor(urlService) {
      this.urlService = urlService;
    }
  
    async shortenUrl(req, res) {
      const { full_url } = req.body;
      if (!full_url) {
        return res.status(400).send("Full URL is required");
      }
  
      try {
        const shorten_url = await this.urlService.shortenUrl(full_url);
        res.status(201).json({ full_url, shorten_url });
      } catch (err) {
        res.status(500).send("Server error");
      }
    }
  
    async redirect(req, res) {
      const { shorten_url } = req.params;
  
      try {
        const full_url = await this.urlService.getFullUrl(shorten_url);
        if (full_url) {
          res.redirect(full_url);
        } else {
          res.status(404).send("URL not found");
        }
      } catch (err) {
        res.status(500).send("Server error");
      }
    }
  }
  
  module.exports = UrlController;
  