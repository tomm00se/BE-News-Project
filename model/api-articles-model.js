const db = require("../db/connection");

exports.fetchAllArticleData = async (
  sortBy = "created_at",
  order = "desc",
  topic
) => {
  if (topic) {
    const topicResult = await db.query(
      "SELECT * FROM topics WHERE slug = $1;",
      [topic]
    );
    if (!topicResult.rows.length) {
      throw {
        status: 404,
        msg: "Not Found!",
      };
    }

    const results = await db.query(
      `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes, COUNT(comment_id)::int AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id WHERE articles.topic = $1 GROUP BY articles.article_id ORDER BY ${sortBy} ${order};`,
      [topic]
    );
    return results.rows;
  }

  const results = await db.query(
    `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes, COUNT(comment_id)::int AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY ${sortBy} ${order};`
  );
  return results.rows;
};
