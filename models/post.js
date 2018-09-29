module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    post_vote: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    
  });

  return Post;
};
