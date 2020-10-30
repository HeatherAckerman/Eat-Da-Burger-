const orm = require("../config/orm.js");
let burger = {
    all: function (cb) {
        orm.all("theBestBurgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create("theBestBurgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("theBestBurgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

};

module.exports = burger;