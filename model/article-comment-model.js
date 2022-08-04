const db = require("../db/connection");
const { validateID, validateRes } = require("./article_id-model");

exports.fetchCommentDataById = async (id) => {
  validateID(id);

  const articleRes = await db.query(
    "SELECT article_id FROM articles WHERE article_id = $1",
    [id]
  );

  validateRes(articleRes);

  const results = await db.query(
    "SELECT comment_id, votes, created_at, author, body FROM comments WHERE article_id = $1 ORDER BY comment_id ASC;",
    [id]
  );
  return results.rows;
};
