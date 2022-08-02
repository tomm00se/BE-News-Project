const db = require("../db/connection");
const { fetchArticleFromTable } = require("./article_id-model");

exports.updateArticleVotes = async (id, incVotes) => {
  const result = await fetchArticleFromTable(id);
  if (result.hasOwnProperty("votes")) {
    const newVote = result.votes + incVotes;
    return { ...result, votes: newVote };
  } else if (!result) {
    throw {
      status: 400,
      msg: "Bad Request",
    };
  }
};
