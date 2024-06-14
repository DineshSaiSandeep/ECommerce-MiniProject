//import db schema
const User = require("../model/User");

//Fetching all the users
const user_all = async (req, res) => {
  try {
    const users = await User.find();
    console.log("Users Data sent");
    res.json(users);
  } catch (error) {
    console.log("Users Fetching error :- ", error);
    res.json({ message: error });
  }
};

//User login auth
const user_auth = async (req, res) => {
  let u_name = req.body.u_name;
  let u_pwd = req.body.u_pwd;
  try {
    const userAuth = await User.findOne({ u_name: u_name });
    if (userAuth) {
      if (userAuth.u_pwd == u_pwd) {
        console.log("Login Success ", userAuth);
        res.json({ message: "Login Success" });
      } else {
        console.log("Login Failed Incorrect Password");
        res.json({ message: "Login Failed, Incorrect Password" });
      }
    } else {
      console.log("Login Failed User doesn't Exist");
      res.json({ message: "Login Failed, User doesn't Exist" });
    }
  } catch (error) {
    console.log("User Auth error :- ", error);
    res.json({ message: error });
  }
};

//Inserting(Creating) an user
const create_user = async (req, res) => {
  const user = new User({
    u_id: req.body.u_id,
    u_name: req.body.u_name,
    u_pwd: req.body.u_pwd,
    u_email: req.body.u_email,
    u_addr: req.body.u_addr,
    u_contact: req.body.u_contact,
  });
  try {
    const savedUser = await user.save();
    console.log("User Created");
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { user_all, user_auth, create_user };
