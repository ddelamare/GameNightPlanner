import { bgg } from 'bgg-sdk';
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource also 22');
});

/* GET User games*/
router.get('/games', async function(req, res, next) {
  var results = await bgg.collection({username: req.cookies['user']})
  res.send(results.items);
});

export default router; 
