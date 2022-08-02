const db = require("../db/connection");

function validateID(id) {
  if (isNaN(parseInt(id))) {
    throw { status: 400, msg: "Bad Request!" };
  }
}

function validateRes(result) {
  if (!result.rows.length) {
    throw {
      status: 404,
      msg: "Not Found!",
    };
  }
}

exports.fetchArticleFromTable = async (id) => {
  validateID(id);

  const article = await db.query(
    "SELECT author, title, body, topic, created_at, votes FROM articles WHERE article_id = $1;",
    [id]
  );

  validateRes(article);

  return article.rows;
};
