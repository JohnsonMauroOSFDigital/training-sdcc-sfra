"use strict";

var server = require("server");

server.get("Start", function(req, res, next) {
    var ProductMgr = require("dw/catalog/ProductMgr");
    var myvariable = ProductMgr.getProduct(req.querystring);
    res.render("product/productTile", { myProduct: myvariable });
    return next();
});

module.exports = server.exports();
