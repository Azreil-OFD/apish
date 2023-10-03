# Подготовка

Для начала создадим файл `hashURL.js` в котором будем хранить функцию для хеширования URL.

```js
// hashURL.js

const crypto = require("crypto");

function hashUrl(url) {
    // ...
}

module.exports = {
    hashUrl,
};
```

Экспортируем функцию `hashUrl`, чтобы потом импортировать её в другие файлы.

Далее идёт код функции:

```js
function hashUrl(url) {
    return crypto
        .createHash("sha256")
        .update(url)
        .digest("hex")
        .substring(0, 8);
}
```

Теперь мы можем импортировать и использовать `hashUrl` в нашем API:

```js
const { hashUrl } = require("./hashURL");
```
