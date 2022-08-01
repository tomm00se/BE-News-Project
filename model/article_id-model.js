const db = require("../db/connection");

exports.fetchArticleFromTable = async (id) => {
  const article = await db.query(
    "SELECT author, title, body, topic, created_at, votes FROM articles WHERE article_id = $1;",
    [id]
  );
  if (!article.rows.length) {
    throw {
      status: 404,
      msg: "Not Found!",
    };
  }
  return article.rows;
};
