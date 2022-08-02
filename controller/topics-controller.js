const { fetchDataFromTopics } = require("../model/topics-model.js");

exports.getTopicsData = async (req, res, next) => {
  try {
    const topics = await fetchDataFromTopics();
    res.status(200).send(topics);
  } catch (err) {
    next(err);
  }
};
