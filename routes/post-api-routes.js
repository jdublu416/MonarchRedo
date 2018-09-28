var db = require("../models");

module.exports = function(app) {
  
  //get for getting all posts
  app.get("/api/posts", function(req, res) {
    db.posts.findAll({}).then(function(dbposts) {
      return res.json(dbposts);
    });
  });

  //get for searching for post by subject
  app.get("/api/posts/subject/:subjectId", function(req, res) {
    db.posts
      .findAll({
        where: {
          subjectId: req.params.subjectId
        },
        include:[db.Subject]
      })
      .then(function(posts) {
        return res.json(posts);
        // res.render("index", { posts: posts });
      });
  });

  //get for searching for post by author
  app.get("/api/posts/authors/:authorId", function(req, res) {
    db.posts
      .findAll({
        where: {
          authorId: req.params.authorId
        },
        include: [db.Authors]
      })
      .then(function(dbposts) {
        return res.json(dbposts);
      });
  });
  //get for searching for single post by post_id
  app.get("/api/posts/:id", function(req, res) {
    db.posts
      .findAll({
        where: {
          Id: req.body.Id
        }
      })
      .then(function(dbposts) {
        return res.json(dbposts);
      });
  });

  // create new post
  app.post("/api/posts", function(req, res) {
    console.log("POSTED");
    db.posts
      .create({
        post_title: req.body.post_title,
        post_body: req.body.post_body,
        post_vote: 0,
        authorId: 1,
        subjectId: 1
      })
      .then(function(dbposts) {
        res.json(dbposts);
      });
  });
  //put route for editing posts
  app.put("/api/posts", function(req, res) {
    db.posts
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbposts);
      });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.posts
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
 
};
