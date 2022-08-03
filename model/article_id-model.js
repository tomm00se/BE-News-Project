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

  const articleRes = await db.query(
    "SELECT * FROM articles WHERE article_id = $1;",
    [id]
  );

  exports.validateRes(articleRes);
  const article = articleRes.rows[0];

  const comments = await db.query(
    "SELECT COUNT(*) FROM comments WHERE article_id = $1;",
    [id]
  );
  article.comment_count = parseInt(comments.rows[0].count);

  return article;
};
