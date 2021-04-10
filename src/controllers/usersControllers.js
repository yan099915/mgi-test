const UsersModel = require("../models/users")();

module.exports = {
  register: async (req, res) => {
    const { nama, hobi, alamat, nomor_telp } = req.body;

    try {
      //create usersmodel
      const users = await UsersModel.create({
        nama: nama,
        hobi: hobi,
        alamat: alamat,
        nomor_telp: nomor_telp,
      });
      res.json({
        message: "success register",
        data: {
          users: users,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  },

  get: async (req, res) => {
    const { nama, hobi, alamat, nomor_telp } = req.body;

    try {
      //create usersmodel
      const users = await UsersModel.find();
      res.json({
        message: "success get users data",
        data: {
          users: users,
        },
      });
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  },

  update: async (req, res) => {
    const { id, nama, hobi, alamat, nomor_telp } = req.body;
    try {
      let update = {
        nama: nama,
        hobi: hobi,
        alamat: alamat,
        nomor_telp: nomor_telp,
      };

      const filter = { _id: id };
      // UPDATE USERDATA AT DATABASE.a
      const updateUser = await UsersModel.findOneAndUpdate(filter, update, {
        new: true,
      });

      res.send({
        message: "success update",
        data: updateUser,
      });
    } catch (error) {
      console.log(error);
      res.json({ message: error });
    }
  },
};
