const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

//coba read heroku deploy

router.get("/users", usersControllers.get);

module.exports = router;
