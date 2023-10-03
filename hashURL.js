const crypto = require("crypto");

function hashUrl(url) {
    return crypto
        .createHash("sha256")
        .update(url)
        .digest("hex")
        .substring(0, 8);
}

module.exports = {
    hashUrl,
};
