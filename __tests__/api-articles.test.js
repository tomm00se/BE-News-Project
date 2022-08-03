const db = require("../db/connection");
const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

const expected = [
  {
    article_id: 3,
    title: "Eight pug gifs that remind me of mitch",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-11-03T09:12:00.000Z",
    votes: 0,
    comment_count: 2,
  },
  {
    article_id: 6,
    title: "A",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-10-18T01:00:00.000Z",
    votes: 0,
    comment_count: 1,
  },
  {
    article_id: 2,
    title: "Sony Vaio; or, The Laptop",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-10-16T05:03:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 12,
    title: "Moustache",
    topic: "mitch",
    author: "butter_bridge",
    created_at: "2020-10-11T11:24:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 5,
    title: "UNCOVERED: catspiracy to bring down democracy",
    topic: "cats",
    author: "rogersop",
    created_at: "2020-08-03T13:14:00.000Z",
    votes: 0,
    comment_count: 2,
  },
  {
    article_id: 1,
    title: "Living in the shadow of a great man",
    topic: "mitch",
    author: "butter_bridge",
    created_at: "2020-07-09T20:11:00.000Z",
    votes: 100,
    comment_count: 11,
  },
  {
    article_id: 9,
    title: "They're not exactly dogs, are they?",
    topic: "mitch",
    author: "butter_bridge",
    created_at: "2020-06-06T09:10:00.000Z",
    votes: 0,
    comment_count: 2,
  },
  {
    article_id: 10,
    title: "Seven inspirational thought leaders from Manchester UK",
    topic: "mitch",
    author: "rogersop",
    created_at: "2020-05-14T04:15:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 4,
    title: "Student SUES Mitch!",
    topic: "mitch",
    author: "rogersop",
    created_at: "2020-05-06T01:14:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 8,
    title: "Does Mitch predate civilisation?",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-04-17T01:08:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 11,
    title: "Am I a cat?",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-01-15T22:21:00.000Z",
    votes: 0,
    comment_count: 0,
  },
  {
    article_id: 7,
    title: "Z",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-01-07T14:08:00.000Z",
    votes: 0,
    comment_count: 0,
  },
];

describe("GET:200 - api/articles", () => {
  it("should respond with a 200 status code", async () => {
    const { body } = await request(app).get("/api/articles").expect(200);
  });
});

describe("GET:200 - /api/articles", () => {
  it("should respond with an array of article objects with the properties in article data.", async () => {
    const { body } = await request(app).get("/api/articles").expect(200);
    expect(body).toEqual(expected);
    expect(body.length).toBe(12);
    expect(Array.isArray(expected)).toBe(true);
  });
});

describe("404 - /api/yetAnotherEggedBread - this is an invalid endpoint", () => {
  it("should respond with a 404 error from error middleware", async () => {
    const { body } = await request(app).get("/api/eggyBread").expect(404);
  });
});
