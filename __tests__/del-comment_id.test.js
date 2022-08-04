const db = require("../db/connection");
const request = require("supertest");
const app = require("../app.js");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

describe("status:204 - no content", () => {
  it("should respond with no content", async () => {
    const { body } = await request(app).delete("/api/comments/1").expect(204);
    expect(body).toEqual({});
  });
});

describe("status:404 - not found", () => {
  it("should respond not found if passed invalid id", async () => {
    const { body } = await request(app).delete("/api/comments/100").expect(404);
    expect(body).toEqual({ msg: "Not Found!" });
  });
});

describe("status:400 - bad request", () => {
  it("should respond bad request if passed invalid id", async () => {
    const { body } = await request(app)
      .delete("/api/comments/eggyBread")
      .expect(400);
    expect(body).toEqual({ msg: "Bad Request!" });
  });
});
