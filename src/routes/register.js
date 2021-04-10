const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

//coba read heroku deploy
router.get("/", (req, res) => res.send("<h1>AP RUN</h1>"));

router.post("/register", usersControllers.register);

module.exports = router;
