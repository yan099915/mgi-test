const UsersModel = require("../models/users")();

module.exports = {
  delete: async (req, res) => {
    try {
      const userId = req.body;
      console.log(req.body);

      const deleteUser = await UsersModel.findByIdAndDelete(userId);
      res
        .status(200)
        .json({ message: "Success delete user", data: deleteUser });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error });
    }
  },
};
