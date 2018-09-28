var db = require("../models");

module.exports = function(app){
    //renders the posts 
    app.get("/posts", function(req, res) {
        db.posts.findAll({}).then(function(post) {
          res.render("index", { post: post });
        });
      });
// renders the posts by subject
      app.get("/api/posts/:subjectId", function(req, res) {
        db.posts
          .findAll({
            where: {
              subjectId: req.params.subjectId
            }
            // include:[db.Subject]
          })
          .then(function(posts) {
            // return res.json(posts);
            res.render("index", { posts: posts });
          });
      });
// renders authors
      app.get('/authors', function(req, res) {

        db.authors.findAll({
          include: [{all: true}],
    
        }).then(function(author) {
    
          res.render("index", {authors: authors});
        });
      });
// render the comments
      app.get("/comments", function(req, res) {

        db.comments.findAll({}).then(function(comment) {
    
          res.render("index", {comment: comment});
        });
      });







}