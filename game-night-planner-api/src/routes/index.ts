import express from 'express';
import { getConnection } from '../db/connection';
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log("b")
  const result = await (await getConnection()).query`select 12345`;
  console.log(result);
  res.render('index', { title: 'Express is cool' });
});

export default router;
