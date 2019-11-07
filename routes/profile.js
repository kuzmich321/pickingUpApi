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
// , async (req, res) => {
//   try {
//     const photos = await unsplash.photos
//       .listPhotos(1, 30)
//       .then(toJson)
//       .then(json => res.json(json));
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: 'Server error'
//     });
//   }
// });

module.exports = router;
