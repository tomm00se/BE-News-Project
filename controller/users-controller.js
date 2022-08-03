const { fetchAllUserData } = require("../model/users-model");

exports.getAllUsers = async (req, res, next) => {
  try {
    const fetchedUserData = await fetchAllUserData();
    res.status(200).send(fetchedUserData);
  } catch (err) {
    next(err);
  }
};
