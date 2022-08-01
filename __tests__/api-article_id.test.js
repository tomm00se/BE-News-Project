const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));

describe("200:GET - /api/articles/:article_id", () => {
  it("should respond with a 200 server status if ID is a valid endpoint", () => {
    return request(app).get("/api/articles/1").expect(200);
  });
  it("should respond with 200 & all data where ID = article_id", () => {
    return request(app)
      .get("/api/articles/1")
      .expect(200)
      .then(({ body }) => {
        const expected = {
          title: "Living in the shadow of a great man",
          topic: "mitch",
          author: "butter_bridge",
          body: "I find this existence challenging",
          created_at: "2020-07-09T20:11:00.000Z",
          votes: 100,
        };
        expect(body).toEqual(expected);
        expect(body.hasOwnProperty("title")).toBe(true);
        expect(body.hasOwnProperty("topic")).toBe(true);
        expect(body.hasOwnProperty("author")).toBe(true);
        expect(body.hasOwnProperty("body")).toBe(true);
        expect(body.hasOwnProperty("created_at")).toBe(true);
        expect(body.hasOwnProperty("votes")).toBe(true);
        expect(body.hasOwnProperty("eggyBread")).toBe(false);
      });
  });
  it("should respond with a 404 error when given an ID that does not exist", () => {
    return request(app)
      .get("/api/articles/999999")
      .expect(404)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Not Found!" });
        expect(body.hasOwnProperty("msg")).toBe(true);
        expect(body.hasOwnProperty("eggyBread")).toBe(false);
      });
  });
  it("should respond with a 400 error when given an ID that is not a number", () => {
    return request(app)
      .get("/api/articles/eggsForBreakfast")
      .expect(400)
      .then(({ body }) => {
        expect(body).toEqual({ msg: "Bad Request!" });
        expect(body.hasOwnProperty("msg")).toBe(true);
        expect(body.hasOwnProperty("eggyBread")).toBe(false);
      });
  });
});
