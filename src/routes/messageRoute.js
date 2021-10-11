const { Router } = require('express');

const { getAllMessageController } = require('@controllers/messageController');

const router = Router();

router.get('/', getAllMessageController);

module.exports = router;
