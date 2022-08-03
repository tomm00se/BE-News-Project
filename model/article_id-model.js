const db = require("../db/connection");

exports.validateID = (id) => {
  if (isNaN(parseInt(id))) {
    throw { status: 400, msg: "Bad Request!" };
  }
};

exports.validateRes = (result) => {
  if (!result.rows.length) {
    throw {
      status: 404,
      msg: "Not Found!",
    };
  }
};

exports.fetchArticleFromTable = async (id) => {
  exports.validateID(id);

  const article = await db.query(
    "SELECT * FROM articles WHERE article_id = $1;",
    [id]
  );

  exports.validateRes(article);

  return article.rows[0];
};
