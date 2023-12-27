const { register, login } = require("../controllers/usersController")
// menit ke 1.21
const router = require("express").Router()

router.post("/register", register);
router.post("/login", login);

module.exports = router; 