const request = require("supertest");
const app = require("../app.js");

const expected = {
  endpoints: {
    "GET /api": {
      description:
        "serves up a json representation of all the available endpoints of the api",
    },
    "GET /api/topics": {
      description: "serves an array of all topics",
      queries: [],
      exampleResponse: {
        topics: [{ slug: "football", description: "Footie!" }],
      },
    },
    "GET /api/users": {
      description: "serves an array of all user data",
      queries: [],
      exampleResponse: [
        {
          username: "butter_bridge",
          name: "jonny",
          avatar_url:
            "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
        },
        {
          username: "icellusedkars",
          name: "sam",
          avatar_url:
            "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
        },
        {
          username: "rogersop",
          name: "paul",
          avatar_url:
            "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
        },
        {
          username: "lurker",
          name: "do_nothing",
          avatar_url:
            "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
        },
      ],
    },
    "GET /api/articles": {
      description: "serves an array of all topics",
      queries: ["topic", "sort_by", "order"],
      exampleResponse: {
        articles: [
          {
            title: "Seafood substitutions are increasing",
            topic: "cooking",
            author: "weegembump",
            body: "Text from the article..",
            created_at: 1527695953341,
          },
        ],
      },
    },
    "GET /api/articles/:article_id": {
      description: "serves an object representing an article",
      queries: [],
      exampleResponse: {
        article_id: 1,
        title: "Running a Node App",
        topic: "coding",
        author: "jessjelly",
        body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
        created_at: "2020-11-07T06:03:00.000Z",
        votes: 0,
        comment_count: 8,
      },
    },
    "GET /api/articles/:article_id/comments": {
      description: "serves an array of all the comments on an article",
      queries: [],
      exampleResponse: {
        comments: [
          {
            comment_id: 31,
            votes: 11,
            created_at: "2020-09-26T16:16:00.000Z",
            author: "weegembump",
            body: "Sit sequi odio suscipit. Iure quisquam qui alias distinctio eos officia enim aut sit. Corrupti ut praesentium ut iste earum itaque qui. Dolores in ab rerum consequuntur. Id ab aliquid autem dolore.",
          },
          {
            comment_id: 33,
            votes: 4,
            created_at: "2019-12-31T21:21:00.000Z",
            author: "cooljmessy",
            body: "Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.",
          },
          {
            comment_id: 44,
            votes: 4,
            created_at: "2020-06-15T15:13:00.000Z",
            author: "grumpy19",
            body: "Error est qui id corrupti et quod enim accusantium minus. Deleniti quae ea magni officiis et qui suscipit non.",
          },
        ],
      },
    },
    "PATCH /api/articles/:article_id": {
      description:
        "updates an article by incrementing the vote count by the amount in inc_votes",
      queries: [],
      exampleRequest: {
        inc_votes: 10,
      },
      exampleResponse: {
        article_id: 1,
        title: "Running a Node App",
        topic: "coding",
        author: "jessjelly",
        body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
        created_at: "2020-11-07T06:03:00.000Z",
        votes: 10,
        comment_count: 8,
      },
    },
    "POST /api/articles/:article_id/comments": {
      description: "posts a new comment on an article",
      queries: [],
      exampleRequest: {
        username: "tickle122",
        body: "I love eggy bread sooooo much!",
      },
      exampleResponse: {
        comment_id: 301,
        body: "I love eggy bread sooooo much!",
        article_id: 1,
        author: "tickle122",
        votes: 0,
        created_at: "2022-08-05T10:54:23.152Z",
      },
    },
    "DELETE /api/comments/:comment_id": {
      description: "deletes a comment by comment_id, returns 204",
      queries: [],
      exampleResponse: {},
    },
  },
};
describe("200 - /api", () => {
  it("should return the contents of the endpoints.json file", async () => {
    const { body } = await request(app)
      .get("/api")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");

    expect(body).toEqual(expected);
  });
});
