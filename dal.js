var mongodb = require("mongodb");
var ObjectId = require('mongodb').ObjectId;
module.exports = class dal {


    constructor() {
        this.mongoClient = mongodb.MongoClient;
        this.url = "mongodb://localhost:27017/nodeAndMongo";
        this.nodeAndMongo = require("assert");
        this.mongoClient.connect(this.url, (err, db) => {
            if (err) console.log("error", err)
            this.db = db;
            this.persons = this.db.collection("persons")
        });
    }


    add(item, success, error) {

        this.persons.insertOne(item, (err, result) => {
            if (err) error(err)
            else {
                success(result);
            }
        })

    };

    remove(item, success, error) {
        this.persons.remove(item, (err, result) => {
            if (err) error(err)
            else {
                success(result);
            }
        })
    }


    update(id,item,error,success) {

        var o_id = new ObjectId(id);
        this.persons.update({
            _id: o_id
        }, item,(err,result)=>{
              if (error) error(err)
            else {
                success(result);
            }
        });

    }

    get(id) {
        var o_id = new ObjectId(id);
        var myCursor = this.persons.find({
            _id: o_id
        });
        return myCursor.next()
    }
}