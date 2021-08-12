"use strict";

var server = require("server");

server.get("HelloWorld", function(req, res, next) {
    var myvariable = "Just a string";
    res.render("training/myfirsttemplate", { myvariable: myvariable });
    return next();
});

server.get("VarTest", function(req, res, next) {
    var myvariable = 1;
    res.render("training/vartest", { requestVar: myvariable });
    return next();
});

module.exports = server.exports();
