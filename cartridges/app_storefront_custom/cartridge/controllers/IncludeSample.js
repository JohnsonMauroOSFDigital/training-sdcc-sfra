"use strict";

var server = require("server");

server.get("RenderTemplate", function(req, res, next) {
    res.render("include/includesample");

    return next();
});

server.get("TestRemoteInclude", function(req, res, next) {
    res.render("include/callincludesample");

    return next();
});

module.exports = server.exports();
