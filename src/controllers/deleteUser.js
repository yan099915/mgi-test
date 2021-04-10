const UsersModel = require("../models/users")();

module.exports = {
  delete: async (req, res) => {
    try {
      const id = req.body.id;

      const deleteUser = await UsersModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: "Success delete user", data: deleteUser });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
    }
  },
};
