const db = require("../db/connection");
const { fetchArticleFromTable } = require("./article_id-model");

exports.updateArticleVotes = async (id, incVotes) => {
  const result = await fetchArticleFromTable(id);
  if (!result.hasOwnProperty("votes") || isNaN(parseInt(incVotes))) {
    throw {
      status: 400,
      msg: "Bad Request",
    };
  }

  const newVote = result.votes + incVotes;
  await db.query("UPDATE articles SET votes = $1 WHERE article_id = $2;", [
    newVote,
    id,
  ]);
  return { ...result, votes: newVote };
};
