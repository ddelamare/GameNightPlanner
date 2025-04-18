import { bgg } from 'bgg-sdk';
import express from 'express';
import { ArrayUtil } from '../util/array.js';
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
      own: 1,
      excludesubtype: "boardgameexpansion"
    })

    if (results === null) {
      throw new Error("Could not load collection")
    }

    // Chunk to sizer 20 because that's what the bgg api allows
    var itemGroups = ArrayUtil.partition(results.items, 20);
    console.log("partitions:",results.items.length, itemGroups.length)

    var gameList = [];
    for(var i = 0; i < itemGroups.length; i ++) {
       /** @type {Array<string>} */
      var idList = itemGroups[i].map(i => i.id + "");
      var chunk = await bgg.thing({
         id: idList
      });
      gameList = gameList.concat(chunk.items);
    }
    gameList = gameList.map(m =>  ({
      id: m.id,
      name: m.names.find(n => n.type === 'primary').value,
      playtime: m.playingTime,
      minPlayers: m.minPlayers,
      maxPlayers: m.maxPlayers,
      thumbnail: m.thumbnail
    }))

  res.send(gameList); 
});

export default router;      
 