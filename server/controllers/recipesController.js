const Users = require('../models/user');
const Recipes = require('../models/recipe');
const Comments = require('../models/comment');

const getRecipes = async (req, res) => {
  try {
    const recipesData = await Recipes.find({});

    if (!recipesData.length)
      return res.json({ success: false, message: 'No created recipes' });

    res.status(200).json({ success: true, data: recipesData });
  } catch (error) {
    console.log(error);
  }
};

const createRecipe = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await Users.findOne({ _id: userId });

    if (!user) {
      return res.json({
        success: false,
        message: 'Nie ma takiego uzytkownika',
      });
    }
    const recipe = await Recipes.create({
      name: req.body.name,
      type: req.body.type,
      difficulty: req.body.difficulty,
      ingredients: req.body.ingredients,
      time: req.body.time,
      description: req.body.description,
      photoUrl: req.body.photoUrl,
      author: userId,
    });

    if (recipe) return res.status(201).json({ success: true, recipe });
  } catch (error) {
    console.log(error);
  }
};

const deleteRecipe = async (req, res) => {
  const { recipeId, userId } = req.params;
  try {
    const userObj = await Users.findOne({ _id: userId });

    if (!userObj) {
      return res.json({
        success: false,
        message: 'Nie ma takiego uzytkownika',
      });
    }
    if (userObj.role === 'user') {
      return res.json({ success: false, message: 'Nie masz uprawnień' });
    }
    const recipe = await Recipes.findOne({ _id: recipeId });
    if (recipe) {
      const res = await Recipes.remove({ _id: recipeId });
      if (res.deletedCount > 0) {
        return res.json({ success: true, message: 'Usunieto przepis' });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const addComment = async (req, res) => {
  const { userId, recipeId, text } = req.body;
  try {
    const recipe = Recipes.findOne({ _id: recipeId });

    if (!recipe) {
      return res.json({ success: false, message: 'Nie ma takiego przepisu' });
    }

    if (recipe.comments.length >= 5) {
      return res.json({
        success: false,
        message: 'Osiagnieto maksymalna liczbe komentarzy',
      });
    }

    const comment = Comments.create({
      userId,
      recipeId,
      text,
    });

    if (comment) {
      return res.json({ succes: true, message: 'Dodano komentarz' });
    }
  } catch (error) {
    console.log(error);
  }
};

const removeComment = async (req, res) => {
  const { commentId, userId } = req.body;
  try {
    const userObj = await Users.findOne({ _id: userId });

    if (!userObj) {
      return res.json({
        success: false,
        message: 'Nie ma takiego uzytkownika',
      });
    }
    if (userObj.role === 'user') {
      return res.json({ success: false, message: 'Nie masz uprawnień' });
    }

    const res = await Comments.remove({ _id: commentId });

    if (res.deletedCount > 0) {
      return res.json({ succes: true, message: 'Usunieto komentarz' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
  addComment,
  removeComment,
};
