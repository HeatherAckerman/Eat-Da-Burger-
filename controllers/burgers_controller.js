let express = require("express");

let router = express.Router();
let burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.all(function (data) {
        let allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

module.exports = router;