const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));

describe("PATCH /api/articles/:article_id", () => {
  it("status:201, should add the value of inc_votes to votes", async () => {
    const { body } = await request(app)
      .patch("/api/articles/1")
      .send({ inc_votes: 1 })
      .expect(201);

    const expected = {
      title: "Living in the shadow of a great man",
      topic: "mitch",
      author: "butter_bridge",
      body: "I find this existence challenging",
      created_at: "2020-07-09T20:11:00.000Z",
      votes: 101,
    };
    expect(body).toEqual(expected);
  });
  it("status:201, should take whatever value is passed to incVotes and incriment votes by that value", async () => {
    const { body } = await request(app)
      .patch("/api/articles/1")
      .send({ inc_votes: 10 })
      .expect(201);

    const expected = {
      title: "Living in the shadow of a great man",
      topic: "mitch",
      author: "butter_bridge",
      body: "I find this existence challenging",
      created_at: "2020-07-09T20:11:00.000Z",
      votes: 110,
    };
    expect(body).toEqual(expected);
  });
  it("status:201, should take whatever value is passed to incVotes and decriments votes by that value", async () => {
    const { body } = await request(app)
      .patch("/api/articles/1")
      .send({ inc_votes: -31 })
      .expect(201);

    const expected = {
      title: "Living in the shadow of a great man",
      topic: "mitch",
      author: "butter_bridge",
      body: "I find this existence challenging",
      created_at: "2020-07-09T20:11:00.000Z",
      votes: 69,
    };
    expect(body).toEqual(expected);
  });
  it("status:400, incorrect type", async () => {
    const { body } = await request(app)
      .patch("/api/articles/1")
      .send({ eggs: 1 })
      .expect(400);

    const expected = { msg: "Bad Request" };
    expect(body).toEqual(expected);
  });
  it("status:400, malformed field", async () => {
    const { body } = await request(app)
      .patch("/api/articles/1")
      .send({})
      .expect(400);

    const expected = { msg: "Bad Request" };
    expect(body).toEqual(expected);
  });
});
