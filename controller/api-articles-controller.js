const { fetchAllArticleData } = require("../model/api-articles-model");

exports.validateSortBy = (sortBy) => {
  if (
    sortBy &&
    ![
      "article_id",
      "title",
      "topic",
      "author",
      "created_at",
      "votes",
      "comment_count",
    ].includes(sortBy)
  ) {
    throw { status: 400, msg: "Bad Request!" };
  }
};

exports.validateOrder = (order) => {
  if (order && !["asc", "desc"].includes(order)) {
    throw { status: 400, msg: "Bad Request!" };
  }
};

exports.validateTopic = (topic) => {
  if (topic && typeof topic !== "string") {
    throw { status: 400, msg: "Bad Request!" };
  }
};

exports.validQueries = ["sort_by", "order", "topic"];

exports.getAllArticles = async (req, res, next) => {
  try {
    const queryKeys = Object.keys(req.query);
    for (let queryKey of queryKeys) {
      if (!exports.validQueries.includes(queryKey)) {
        throw { status: 400, msg: "Bad Request!" };
      }
    }

    const sortBy = req.query.sort_by;
    const order = req.query.order;
    const topic = req.query.topic;
    exports.validateSortBy(sortBy);
    exports.validateOrder(order);
    exports.validateTopic(topic);

    const fetchedArticleData = await fetchAllArticleData(sortBy, order, topic);
    res.status(200).send(fetchedArticleData);
  } catch (err) {
    next(err);
  }
};
