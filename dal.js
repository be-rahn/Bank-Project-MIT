const { MongoClient, ServerApiVersion } = require("mongodb");
const url = process.env.MONGO_DB_URI;
let db = null;

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    console.log("Connected successfully to db server");

    // connect to my project database
    db = client.db("myproject");
    collection = db.collection("users");
  }
);

function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = { name, email, password, balance: 0 };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = { create, all };
