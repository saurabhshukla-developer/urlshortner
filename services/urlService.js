const shortid = require('shortid');

class UrlService {
  constructor(UrlModel) {
    this.UrlModel = UrlModel;
  }

  async shortenUrl(full_url) {
    const existingUrl = await this.UrlModel.findOne({ full_url });
    if (existingUrl) {
      return existingUrl.shorten_url;
    }
    
    const shorten_url = shortid.generate();
    const newUrl = new this.UrlModel({ full_url, shorten_url });
    await newUrl.save();
    return shorten_url;
  }

  async getFullUrl(shorten_url) {
    const urlDoc = await this.UrlModel.findOne({ shorten_url });
    return urlDoc ? urlDoc.full_url : null;
  }
}

module.exports = UrlService;
