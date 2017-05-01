var lib = process.cwd();
var path = require("path");
var express = require("express");
var router = express.Router();
var assert = require("assert")
var DAL = require(path.join(lib, "/dal"));

var dal = new DAL();


router.post("/insert", (req, res) => {
    let person = {
        name: req.body.name,
        age: req.body.age
    }
    dal.add(person, (result) => res.json(result), (e) => res.json(e));
})

router.post("/remove", (req, res) => {
    let person = {
        name: req.body.name,
        age: req.body.age
    }
    dal.remove(person, (result) => res.json(result), (e) => res.json(e));
})

router.post("/update", (req, res) => {
     id=req.body.id;
    let person = {
        age: req.body.age
    }
    dal.update(id,person,(result) => res.json(result), (e) => res.json(e))


})

router.get("/:id", (req, res) => {

    var promise = dal.get(req.params.id);
    promise.then(function (data) {
        res.json(data)
    })

})






module.exports = router;