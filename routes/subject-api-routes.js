

var db = require("../models");
var subject = db.subject;

module.exports = function(app) {
  app.get("/subjects", function(req, res) {
    return Promise.all([
      db.subject.findAll({}),

      db.authors.findAll({}),

      db.posts.findAll({
        // where: { subj_id: 1 } //to be unhard coded
      }),
      db.comments.findAll({
        // where: { post_id: 1 } //to be unhard coded
      })
    ]).then(([subject, author, posts, comments]) => {
      res.render("index", {
        subject: subject,
        author: author,
        posts: posts,
        comments: comments
      });
    });
  });

  app.get("/subjects", function(req, res) {
    db.subject.findAll({}).then(function(subject) {
      res.render("index", { subject: subject });
    });
});
  // app.get("/subjects", function(req, res) {

  //   db.subject.findAll({}).then(function(subject) {

  //     res.render("index", {subject: subject});
  //   });
  // });

  // GET route for getting all of the subjects
  app.get("/api/subjects", function(req, res) {
    // Write code here to retrieve all of the posts from the database and res.json them
    // back to the user

    db.subject.findAll({}).then(function(subject) {
      res.json(subject);
    });
  });
};
