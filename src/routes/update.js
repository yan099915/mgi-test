const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

//coba read heroku deploy

router.put("/update", usersControllers.update);

module.exports = router;
