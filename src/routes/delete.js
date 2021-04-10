const router = require("express").Router();
const deleteUser = require("../controllers/deleteUser");

router.delete("/users/delete", deleteUser.delete);

module.exports = router;
