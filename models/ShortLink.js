const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const ShortLink = sequelize.define(
        "ShortLink",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: "shortLinks",
        }
    );

    return ShortLink;
};
