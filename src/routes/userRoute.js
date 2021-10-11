const { Router } = require('express');

const {
  createUserController,
  entryUserController,
  getAllUserController,
} = require('@controllers/userController');

const router = Router();

router.post('/', createUserController);
router.get('/all', getAllUserController);
router.put('/entry', entryUserController);

module.exports = router;
