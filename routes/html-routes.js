var db = require("../models");

module.exports = function(app){
    //renders the post 
    app.get("/post", function(req, res) {
        db.post.findAll({}).then(function(post) {
          res.render("index", { post: post });
        });
      });
// renders the post by subject
      app.get("/api/post/:subjectId", function(req, res) {
        db.post
          .findAll({
            where: {
              subjectId: req.params.subjectId
            }
            // include:[db.Subject]
          })
          .then(function(post) {
            // return res.json(post);
            res.render("index", { post: post });
          });
      });
// renders author
      app.get('/author', function(req, res) {

        db.author.findAll({
          include: [{all: true}],
    
        }).then(function(author) {
    
          res.render("index", {author: author});
        });
      });
// render the comment
      app.get("/comment", function(req, res) {

        db.comment.findAll({}).then(function(comment) {
    
          res.render("index", {comment: comment});
        });
      });
      //render the subject
      app.get('/subject', function (req, res){
        db.subject.findAll({}).then(function(comment){
          res.render("index", {comment:comment});
        });
      });
}