module.exports = function(sequelize, DataTypes) {
    var Subject = sequelize.define("subject", {


        id: { 
            type: DataTypes.INTEGER, 
            allowNull: false, 
            auto_increment: true, 
            primaryKey: true   
        }, 


        subj_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        subj_desc: {
            type: DataTypes.STRING,
            allowNull: true,
            },
    });
    return Subject;
};