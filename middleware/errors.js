exports.errorMiddleware = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
    next(err);
  } else if (err.code === "22P02") {
    res.status(400).send({ msg: "Bad Request!" });
  } else {
    next(err);
  }
  res.status(500).send("Server Error");
};
