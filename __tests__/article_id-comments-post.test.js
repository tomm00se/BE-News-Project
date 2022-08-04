const db = require("../db/connection");
const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

describe("201: POST - /api/articles/:article_id/comments", () => {
  const posting = {
    username: "butter_bridge",
    body: "I find this existance challenging",
  };
  const commentData = {
    article_id: 1,
    author: "butter_bridge",
    body: "I find this existance challenging",
    comment_id: 19,
    votes: 0,
  };
  it("status:201 - should send the request body an object with username and body", async () => {
    const { body } = await request(app)
      .post("/api/articles/1/comments")
      .send(posting)
      .expect(201);
    console.log(body);

    const currentTime = new Date();
    const createdAt = new Date(body.created_at);

    currentTime.setSeconds(0, 0);
    createdAt.setSeconds(0, 0);

    delete body.created_at;
    expect(body).toEqual(commentData);
    expect(currentTime).toEqual(createdAt);
  });
  it("status:400, sending a malformed body", async () => {
    const { body } = await request(app)
      .post("/api/articles/1/comments")
      .send({})
      .expect(400);
    const expected = { msg: "Bad Request!" };
    expect(body).toEqual(expected);
  });
  it("status:400, sending an incorrect type", async () => {
    const { body } = await request(app)
      .post("/api/articles/1/comments")
      .send({ pokemon: "fire red" })
      .expect(400);
    const expected = { msg: "Bad Request!" };
    expect(body).toEqual(expected);
  });
});
