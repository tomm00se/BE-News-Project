const request = require("supertest");
const app = require("../app.js");
const db = require("../db/connection");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

const expected = {
  comments: [
    {
      author: "butter_bridge",
      body: "The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.",
      comment_id: 2,
      created_at: "2020-10-31T03:03:00.000Z",
      votes: 14,
    },
    {
      author: "icellusedkars",
      body: "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
      comment_id: 3,
      created_at: "2020-03-01T01:13:00.000Z",
      votes: 100,
    },
    {
      author: "icellusedkars",
      body: " I carry a log — yes. Is it funny to you? It is not to me.",
      comment_id: 4,
      created_at: "2020-02-23T12:01:00.000Z",
      votes: -100,
    },
    {
      author: "icellusedkars",
      body: "I hate streaming noses",
      comment_id: 5,
      created_at: "2020-11-03T21:00:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "I hate streaming eyes even more",
      comment_id: 6,
      created_at: "2020-04-11T21:02:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "Lobster pot",
      comment_id: 7,
      created_at: "2020-05-15T20:19:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "Delicious crackerbreads",
      comment_id: 8,
      created_at: "2020-04-14T20:19:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "Superficially charming",
      comment_id: 9,
      created_at: "2020-01-01T03:08:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "Massive intercranial brain haemorrhage",
      comment_id: 12,
      created_at: "2020-03-02T07:10:00.000Z",
      votes: 0,
    },
    {
      author: "icellusedkars",
      body: "Fruit pastilles",
      comment_id: 13,
      created_at: "2020-06-15T10:25:00.000Z",
      votes: 0,
    },
    {
      author: "butter_bridge",
      body: "This morning, I showered for nine minutes.",
      comment_id: 18,
      created_at: "2020-07-21T00:20:00.000Z",
      votes: 16,
    },
  ],
};
describe("GET /api/articles/:article_id/comments", () => {
  it("should return a 200 status code if endpoint is valid", async () => {
    const { body } = await request(app)
      .get("/api/articles/1/comments")
      .expect(200);
  });
  it("status:200, should return an array containing comment_id, votes created_at, author and body", async () => {
    const { body } = await request(app)
      .get("/api/articles/1/comments")
      .expect(200);
    expect(body).toEqual(expected);
    expect(body.comments.length).toBe(11);
  });
  it("should respond with a 404 error when given an ID that does not exist", async () => {
    const { body } = await request(app)
      .get("/api/articles/999999/comments")
      .expect(404);
    expect(body).toEqual({ msg: "Not Found!" });
  });
});
describe("400 & 404's: Error handling w/multiple tests", () => {
  it("should respond with a 404 error from error middleware", async () => {
    const { body } = await request(app)
      .get("/api/articles/1/rickAstley")
      .expect(404);
  });
  it("should respond with a 404 error when given an ID that does not exist", async () => {
    const { body } = await request(app)
      .get("/api/articles/eatingBananas/comments")
      .expect(400);
    expect(body).toEqual({ msg: "Bad Request!" });
  });
});
