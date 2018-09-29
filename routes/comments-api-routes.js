
var db = require("../models");

module.exports = function(app) {

 
    // get for all comment
    app.get("/api/comment", function(req, res) {
      //GET to retrieve all of the comment  
      db.comment.findAll({}).then(function(dbcomment) {
        return res.json(dbcomment);
      });
    });
//GET  for specific single comment
    app.get("/api/comment/:id", function(req,res){
      db.comment.findAll({
        where:{
          id: req.params.id
        }
      }).then(function(dbcomment){
        res.json(dbcomment);

      });
    });
// GET all comment for  a specific post
    app.get("/api/comment/posts/:postId", function(req,res){
      db.comment.findAll({
        where:{
          postId: req.params.postId
        },
        include: [db.Posts]
      });
    });
    
// create a new comment to a specific post
    app.post("/api/posts/:postId", function(req, res){
      db.comment.create({
        comm_body: req.body.comm_body,
        comm_vote: req.body.comm_vote,
        postId: req.body.postId,
        authorId: req.body.authorId
        
      }).then(function(dbcomment){
        res.json(dbcomment);

      });
    });
//update for an existing post
    app.put("/api/posts/:id", function(req,res){
      db.comment.update(req.body,{
        where: {
          id: req.body.id
        }

      }).then(function(dbcomment){
        res.json(dbcomment);

     
      });
    });

//delete a comment
    app.delete("/api/posts/:id",function(req,res){
      db.comment.destroy({
        where: {
          id: req.params.id
        }

      }).then(function(dbcomment){
        res.json(dbcomment);

      });
    });

  };