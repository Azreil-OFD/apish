# Подготовка 2

Для разработки используйте модель `models/ShortLink`

```js
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
            hash: {
                type: DataTypes.STRING,
                allowNull: false,
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
```
