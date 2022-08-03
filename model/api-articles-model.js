const db = require("../db/connection");

exports.fetchAllArticleData = async () => {
  const results = await db.query(
    "SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes, COUNT(comment_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY created_at DESC;"
  );

  const newArray = results.rows.map((item) => {
    return { ...item, comment_count: parseInt(item.comment_count, 10) };
  });

  return newArray;
};
