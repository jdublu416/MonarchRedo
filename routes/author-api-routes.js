
var db = require("../models");
var express= require('express');
var app= express();

module.exports = function(app) {

  app.get('/authors', function(req, res) {

    db.authors.findAll({
      include: [{all: true}],

    }).then(function(author) {

      res.render("index", {authors: authors});
    });
  });
  
//
  app.get("/api/authors", function(req, res) {

    db.authors.findAll({}).then(function(dbauthors) {
      return res.json(dbauthors);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.authors.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });


  app.post("/api/authors", function(req, res) {
    dbauthors.create(

      {
        auth_FN: req.body.auth_FN,
        auth_LN: req.body.auth_LN,
        auth_user_name: req.body.auth_user_name,
        auth_email: req.body.auth_email,
        auth_password: req.body.auth_password
      })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });


app.get("/api/authors", function(req, res){
  dbauthors.findAll({
    where: {
      subject: req.params.subject.id
    }
  })

    .then(function(dbauthors) {
      res.json(dbauthors);
    });
  });

    app.delete("/api/authors/:id", function(req, res) {


      dbauthors.destroy({
        where: {
          id: req.params.id
        }
      })

        .then(function(dbauthors) {
          res.json(dbauthors);

       
        });
    });
  
    app.put("/api/authors", function(req, res) {
      dbauthors.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })

        .then(function(dbauthors) {
          res.json(dbauthors);
        });
    });
  
  }
