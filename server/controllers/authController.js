const Users = require('../models/user');
const Recipes = require('../models/recipe');


const signup = async (req, res) => {
  console.log(req.body);
  try {
    const isEmailExists = await Users.findOne({ email: req.body.email });
    if (isEmailExists)
      return res.status(400).json({
        success: false,
        message:
          'Konto z podanym emailem juz istnieje. Spróbuj wykorzystać inny email.',
      });

    const user = await Users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    if (user) {
      return res
        .status(201)
        .json({ success: true, user: user._id, role: user.role });
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).json({
        success: false,
        message: 'Hasło lub email jest nieprawidłowy.',
      });
      const recipesData = await Recipes.find({author:user._id});
      console.log(recipesData)

    const isPasswordValid = req.body.password === user.password;

    if (!isPasswordValid)
      return res.status(400).json({
        success: false,
        message: 'Hasło lub email jest nieprawidłowy.',
      });

    const userData = {
      id: user._id,
      email: user.email,
      role: user.role,
      recipes: recipesData,
    };

    res.json({ success: true, user: userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, signup };
