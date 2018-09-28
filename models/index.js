'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//associations
db.posts.belongsTo(db.authors);
db.authors.hasMany(db.posts);
db.posts.belongsTo(db.subject);
db.subject.hasMany(db.posts);
db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);
db.authors.hasMany(db.comments);
db.comments.belongsTo(db.authors);

//setting foreign key in posts table post_id
//db.authors.hasMany(db.posts, { foreignKey: 'post_id' });
//posts.belongsTo(authors, { foreignKey: 'auth_id' });
//setting foreign key in posts table from subject table
//db.subject.hasMany(db.posts, {foreignKey: 'post_id'});
//db.posts.belongsTo(db.subject, {foreignKey: 'subj_id'});
//setting foreign key of post id in the comments table
//db.posts.hasMany(db.comments, {foreignKey: 'comm_id'});
//db.comments.belongsTo(db.posts, {foreignKey: 'post_id'});

module.exports = db;
