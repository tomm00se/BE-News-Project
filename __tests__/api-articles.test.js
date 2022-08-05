const db = require("../db/connection");
const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

const expectedByDate = [
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
const expectedById = [
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
    article_id: 2,
    title: "Sony Vaio; or, The Laptop",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-10-16T05:03:00.000Z",
    votes: 0,
    comment_count: 0,
  },
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
    article_id: 4,
    title: "Student SUES Mitch!",
    topic: "mitch",
    author: "rogersop",
    created_at: "2020-05-06T01:14:00.000Z",
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
    article_id: 6,
    title: "A",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-10-18T01:00:00.000Z",
    votes: 0,
    comment_count: 1,
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
    article_id: 11,
    title: "Am I a cat?",
    topic: "mitch",
    author: "icellusedkars",
    created_at: "2020-01-15T22:21:00.000Z",
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
];
const expectedByTopic = [
  {
    article_id: 5,
    title: "UNCOVERED: catspiracy to bring down democracy",
    topic: "cats",
    author: "rogersop",
    created_at: "2020-08-03T13:14:00.000Z",
    votes: 0,
    comment_count: 2,
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
    expect(body).toEqual(expectedByDate);
    expect(body.length).toBe(12);
    expect(Array.isArray(expectedByDate)).toBe(true);
  });
});

describe("GET:200 - /api/articles/?QUERY=QUERY", () => {
  it("should respond with all article data, after getting handled by sort_by query", async () => {
    const { body } = await request(app)
      .get("/api/articles?sort_by=article_id&order=asc")
      .expect(200);
    expect(body).toEqual(expectedById);
  });
  it("should respond with article data filtered by the cats topic, orded by ID", async () => {
    const { body } = await request(app)
      .get("/api/articles?topic=cats&sort_by=article_id")
      .expect(200);
    expect(body).toEqual(expectedByTopic);
  });
  it("should respond with article data sorted by created_at, ordered asc", async () => {
    const { body } = await request(app)
      .get("/api/articles?order=asc")
      .expect(200);
    const reversedExpected = [...expectedByDate].reverse();
    expect(body).toEqual(reversedExpected);
  });
});

describe("400 - /api/articles/?QUERY=QUERY", () => {
  it("should respond 400 when given a query that is not sort_by, query or topic", async () => {
    const { body } = await request(app)
      .get("/api/articles?eggyBread=yesPlease")
      .expect(400);
    expect(body).toEqual({ msg: "Bad Request!" });
  });

  it("should respond 400 when given a query that has an invalid sort_by", async () => {
    const { body } = await request(app)
      .get("/api/articles?sort_by=eggyBread")
      .expect(400);
    expect(body).toEqual({ msg: "Bad Request!" });
  });

  it("should respond 400 when given a query that has an invalid order", async () => {
    const { body } = await request(app)
      .get("/api/articles?order=eggyBread")
      .expect(400);
    expect(body).toEqual({ msg: "Bad Request!" });
  });
});

describe("404 - /api/yetAnotherEggedBread - this is an invalid endpoint", () => {
  it("should respond with a 404 error from error middleware", async () => {
    const { body } = await request(app).get("/api/eggyBread").expect(404);
  });

  it("should respond 404 when given a query that has an invalid topic", async () => {
    const { body } = await request(app)
      .get("/api/articles?topic=eggyBread")
      .expect(404);
    expect(body).toEqual({ msg: "Not Found!" });
  });
});
