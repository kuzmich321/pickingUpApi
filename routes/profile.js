const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({
  applicationId: process.env.VUE_APP_API_KEY,
  secret: process.env.VUE_APP_API_SECRET_KEY,
  callbackUrl: process.env.UNSPLASH_URL
});

router.get('/');

module.exports = router;
