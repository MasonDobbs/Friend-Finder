var path = require("path");

module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(path.dirname(__filename), "../public/survey.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(path.dirname(__filename), "../public/home.html"));
    });
}