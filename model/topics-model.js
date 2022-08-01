const db = require("../db/connection");

exports.fetchDataFromTopics = async () => {
  const result = await db.query("SELECT * FROM topics");
  return result.rows;
};
