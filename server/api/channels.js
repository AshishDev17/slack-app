const router = require('express').Router();
const {Channel} = require('../db/models');
module.exports = router;

//GET api/channels
router.get('/', (req, res, next) => {
  Channel.findAll()
    .then(channels => res.json(channels))
    .catch(next);
});


//GET api/channels/:channelId
router.get('/:channelId', (req, res, next) => {
  Channel.findById(req.params.channelId)
    .then(channel => res.json(channel))
    .catch(next);
});
