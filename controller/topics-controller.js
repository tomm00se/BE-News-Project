const {
  articleData,
  commentData,
  topicData,
  userData,
} = require("../db/data/test-data/index.js");
const { fetchDataFromTopics } = require("../model/topics-model.js");

exports.getMethodStatus = (req, res, next) => {
  res.sendStatus(200);
};

exports.getTopicsData = async (req, res, next) => {
  //   fetchDataFromTopics().then((topics) => res.status(200).send(topics));

  try {
    const topics = await fetchDataFromTopics();
    res.status(200).send(topics);
  } catch (err) {
    next(err);
  }
};
