exports.handleCustomError = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  }
  next(err);
};

exports.serverErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).send("Server Error");
};
