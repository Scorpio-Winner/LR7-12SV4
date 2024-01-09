const { User } = require("../models/models");
const bcrypt = require("bcrypt");

class UserController {

  async create(req, res) {

    const { email, password } = req.body;

    try {
  
      const existingUser = await User.findOne({ where: { email: email } });

      if (existingUser) {
        return res.status(400).json({ error: "Email is taken" });
      }
      else {
      const bcryptPassword = await bcrypt.hash(password, 10);
  
      const createdUser = await User.create({ 
        email, 
        password: bcryptPassword
      });
  
      return res.status(201).json(createdUser);
      }
  
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  }  
  
}

module.exports = new UserController();