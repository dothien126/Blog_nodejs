const res = require("express/lib/response");

class SiteController {

    // [GET] /
    index(req, res) {
        res.render("home");
    };

    // [GET] /search
    search(req, res) {
        res.render("search");
    };
}

module.exports = new SiteController;