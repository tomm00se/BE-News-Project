const db = require("../db/connection");

function validColumn(column) {
  if (
    column !== "article_id" &&
    column !== "created_at" &&
    column !== "title" &&
    column !== "topic" &&
    column !== "votes" &&
    column !== "comment_count"
  ) {
    return false;
  }

  return true;
}

exports.fetchAllArticleData = async (query) => {
  let sortBy = "created_at";
  let order = "DESC";

  if (query.sort_by) {
    sortBy = query.sort_by;

    if (!validColumn(sortBy)) {
      throw {
        status: 400,
        msg: "Bad request!",
      };
    }
  }

  if (query.order) {
    order = query.order.toUpperCase();

    if (order !== "ASC" && order !== "DESC") {
      throw {
        status: 400,
        msg: "Bad request!",
      };
    }
  }

  if (query.topic) {
    const results = await db.query(
      `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes, COUNT(comment_id)::int AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id WHERE articles.topic = $1 GROUP BY articles.article_id ORDER BY ${sortBy} ${order};`,
      [query.topic]
    );
    return results.rows;
  }

  const results = await db.query(
    `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes, COUNT(comment_id)::int AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY ${sortBy} ${order};`
  );
  return results.rows;
};
