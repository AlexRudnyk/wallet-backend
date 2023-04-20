const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const userEmail = await User.findOne({ email });
  if (userEmail) {
    throw new Conflict(`${email} in use`);
  }
  const image = gravatar.url(email);
  const newUser = new User({ name, email, image: null });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    message: "You have been successfully registered",
  });
};

module.exports = signup;
