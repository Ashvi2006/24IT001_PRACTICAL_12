
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Tasks fetched successfully',
    tasks: []
  });
});

module.exports = router;
