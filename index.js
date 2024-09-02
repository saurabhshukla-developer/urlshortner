// index.js

const express = require('express');
const connectDB = require('./config/db');
const UrlModel = require('./models/urlModel');
const UrlService = require('./services/urlService');
const UrlController = require('./controllers/urlController');
const urlRoutes = require('./routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();  // Connect to MongoDB with Mongoose
    const urlService = new UrlService(UrlModel);
    const urlController = new UrlController(urlService);
    
    app.use(express.json());
    // app.use('/api', urlRoutes(urlController));
    app.use('/', urlRoutes(urlController));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server", err);
    process.exit(1);
  }
})();