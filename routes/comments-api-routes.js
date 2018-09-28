
var db = require("../models");

module.exports = function(app) {

 
    // get for all comments
    app.get("/api/comments", function(req, res) {
      //GET to retrieve all of the comments  
      db.comments.findAll({}).then(function(dbcomments) {
        return res.json(dbcomments);
      });
    });
//GET  for specific single comment
    app.get("/api/comments/:id", function(req,res){
      db.comments.findAll({
        where:{
          id: req.params.id
        }
      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });
// GET all comments for  a specific post
    app.get("/api/comments/posts/:postId", function(req,res){
      db.comments.findAll({
        where:{
          postId: req.params.postId
        },
        include: [db.Posts]
      });
    });
    
// create a new comment to a specific post
    app.post("/api/posts/:postId", function(req, res){
      db.comments.create({
        comm_body: req.body.comm_body,
        comm_vote: req.body.comm_vote,
        postId: req.body.postId,
        authorId: req.body.authorId
        
      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });
//update for an existing post
    app.put("/api/posts/:id", function(req,res){
      db.comments.update(req.body,{
        where: {
          id: req.body.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

     
      });
    });

//delete a comment
    app.delete("/api/posts/:id",function(req,res){
      db.comments.destroy({
        where: {
          id: req.params.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });

  };