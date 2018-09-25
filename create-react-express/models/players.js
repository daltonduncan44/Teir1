module.exports = function (sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
        // Giving the Author model a name of type STRING
        Position: DataTypes.TEXT,
        Player: DataTypes.STRING,
        Teir: DataTypes.INTERGER,
        Pr: Datatypes.INTERGER
    });

    Players.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Players.hasMany(models.Post, {
            onDelete: "cascade"
        });
    };

    return Players;
};