const db = require("../db/connection");
const { validateRes, validateID } = require("./article_id-model");

exports.createNewComment = async (id, postData) => {
  validateID(id);

  const validateIdQuery = await db.query(
    "SELECT article_id FROM articles WHERE article_id = $1",
    [id]
  );

  validateRes(validateIdQuery);

  if (typeof postData.username != "string") {
    throw {
      status: 400,
      msg: "Bad Request!",
    };
  }

  const userResult = await db.query(
    "SELECT users.username FROM users WHERE users.username = $1;",
    [postData.username]
  );

  if (!userResult.rows.length) {
    throw {
      status: 404,
      msg: "Not Found!",
    };
  }

  const insertQuery = await db.query(
    "INSERT INTO comments (article_id, author, body) VALUES ($1,$2,$3) RETURNING *;",
    [id, postData.username, postData.body]
  );
  return insertQuery.rows[0];
};
