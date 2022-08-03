const request = require("supertest");
const app = require("../app.js");
const db = require("../db/connection");
const testData = require("../db/data/test-data");
const seed = require("../db/seeds/seed.js");
beforeEach(() => seed(testData));
afterAll(() => {
  db.end();
});

describe("GET:200 - api/users", () => {
  it("should respond with a 200 status code", async () => {
    const { body } = await request(app).get("/api/users").expect(200);
  });
});

describe("GET:200 - /api/users", () => {
  const expected = [
    {
      username: "butter_bridge",
      name: "jonny",
      avatar_url:
        "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
    },
    {
      username: "icellusedkars",
      name: "sam",
      avatar_url: "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
    },
    {
      username: "rogersop",
      name: "paul",
      avatar_url: "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
    },
    {
      username: "lurker",
      name: "do_nothing",
      avatar_url:
        "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
    },
  ];
  it("should respond with an array of user objects with properties; username, name and avatar_url.", async () => {
    const { body } = await request(app).get("/api/users").expect(200);
    expect(body).toEqual(expected);
    expect(body.length).toBe(4);
    expect(Array.isArray(expected)).toBe(true);
  });
});


describe("404 - /api/eggyBread - end point does not exist", () => {
  it("should respond with a 404 error from error middleware", async () => {
    const { body } = await request(app).get("/api/eggyBread").expect(404);
  });
});
