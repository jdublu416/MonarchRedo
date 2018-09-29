
var db = require("../models");
var express= require('express');
var app= express();

module.exports = function(app) {

  app.get('/author', function(req, res) {

    db.author.findAll({
      include: [{all: true}],

    }).then(function(author) {

      res.render("index", {author: author});
    });
  });
  
//
  app.get("/api/author", function(req, res) {

    db.author.findAll({}).then(function(dbauthor) {
      return res.json(dbauthor);
    });
  });

  app.delete("/api/author/:id", function(req, res) {
    db.author.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbauthor) {
        res.json(dbauthor);
      });
  });


  app.post("/api/author", function(req, res) {
    dbauthor.create(

      {
        auth_FN: req.body.auth_FN,
        auth_LN: req.body.auth_LN,
        auth_user_name: req.body.auth_user_name,
        auth_email: req.body.auth_email,
        auth_password: req.body.auth_password
      })
      .then(function(dbauthor) {
        res.json(dbauthor);
      });
  });


app.get("/api/author", function(req, res){
  dbauthor.findAll({
    where: {
      subject: req.params.subject.id
    }
  })

    .then(function(dbauthor) {
      res.json(dbauthor);
    });
  });

    app.delete("/api/author/:id", function(req, res) {


      dbauthor.destroy({
        where: {
          id: req.params.id
        }
      })

        .then(function(dbauthor) {
          res.json(dbauthor);

       
        });
    });
  
    app.put("/api/author", function(req, res) {
      dbauthor.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })

        .then(function(dbauthor) {
          res.json(dbauthor);
        });
    });
  
  }
