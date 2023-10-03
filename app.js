const { hashUrl } = require("./hashURL");
const express = require("express");
const Sequelize = require("sequelize");
const shortLinkInitiator = require("./models/ShortLink");
const app = express();
// инициализируем и подключимся к базе данных
const sequelize = new Sequelize(
    "postgres://postgres:123456789@localhost:5432/postgres"
);
shortLinkInitiator(sequelize);
(async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

// region Ваш код

// end Region

// запустим API
app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
