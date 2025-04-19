import { bgg, PayloadTypes } from 'bgg-sdk';
import express from 'express';
import { ArrayUtil } from '../util/array.js';
import GameInfo from '../models/gameInfo'
import { getConnection } from '../db/connection';

var router = express.Router();



/* GET users listing. */
router.get('/', async function(req, res, next) {
   const result = await (await getConnection()).query`select 12345`;
   console.log(result);
   res.send('this endpoint does nothing');
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

    var gameList : GameInfo[] = [];
    var chunkList : any[] = [];
    for(var i = 0; i < itemGroups.length; i ++) {
      var idList = itemGroups[i].map(i => i.id + "");
      var chunk = await bgg.thing({
         id: idList
      });
      chunkList = chunkList.concat(chunk.items);
    }
    gameList = chunkList.map(m =>  ({
      id: m.id,
      name: m.names.find((n : PayloadTypes.PayloadThingNames) => n.type === 'primary').value,
      playingTime: m.playingTime,
      minPlayers: m.minPlayers,
      maxPlayers: m.maxPlayers,
      thumbnail: m.thumbnail
    } satisfies GameInfo))

  res.send(gameList); 
});

export default router;      
 