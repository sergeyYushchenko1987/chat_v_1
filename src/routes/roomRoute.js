const { Router } = require('express');

const {
  createRoomController,
  getAllRoomController,
} = require('@controllers/roomController');

const router = Router();

router.get('/', getAllRoomController);
router.post('/', createRoomController);

module.exports = router;
