const { User, Basket } = require("../models/models");
const bcrypt = require("bcrypt");

class UserController {

  async create(req, res) {
    try {
      const user = { ...req.body };
  
      if (await User.findOne({ where: { email: user.email } })) {
        return res.status(400).json({ error: "Email is taken" });
      }
  
      user.password = await bcrypt.hash(user.password, 10);
  
      const createdUser = await User.create(user);
  
      return res.status(201).json(createdUser);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }  

  
}

module.exports = new UserController();