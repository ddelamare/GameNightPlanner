import { bgg } from 'bgg-sdk';
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource also 22');
});

/* GET User games*/
router.get('/games', async function(req, res, next) {
  var results = await bgg.collection(
    {
      username: req.cookies['user'],
      own: '1',
      brief: '0',
      stats: '1',
      excludesubtype: "boardgameexpansion"
    })
  res.send(results.items);
});

export default router;  
