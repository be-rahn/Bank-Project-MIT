

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/bank-project-mit",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
let db = null;

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  db = client.db("myproject");
});

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
