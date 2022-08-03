const db = require("../db/connection");

exports.fetchAllUserData = async () => {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
};
