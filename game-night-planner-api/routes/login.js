import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.cookie('user', 'shubkin')
  res.send('Cookie made');
});

export default router;
