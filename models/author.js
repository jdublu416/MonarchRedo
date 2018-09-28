module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("authors", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    auth_FN: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 20],
        is: ["^[a-z]+$", "i"],
      }
    },
    auth_LN: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 30],
        is: ["^[a-z]+$", "i"],
      }
    },
    auth_user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
        notEmpty: true
      }
    },
    auth_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    auth_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
  });

  return Authors;
};
