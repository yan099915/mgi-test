const router = require("express").Router();
const deleteUser = require("../controllers/deleteUser");

router.post("/users/delete", deleteUser.delete);

module.exports = router;
