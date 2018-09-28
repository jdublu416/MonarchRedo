var express = require('express');
var app = express();

var db = require("../models");


module.exports = function (app) {

    app.get("/test", function (req, res) {

        return Promise.all([

            db.subject.findAll({}),

            db.authors.findAll({}),

            db.posts.findAll({
                where: {subjectId: 1} //to be unhard coded
            }),
            db.comments.findAll({
                where: {postId: 1} //to be unhard coded
            }),

        ]).then(([subject, author, posts]) => {

            res.render("index", {
                subject: subject,
                author: author,
                posts: posts,
                comments: comments
            });
        });
    });

};