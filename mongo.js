const mongodb = require("mongodb");
const mc = mongodb.MongoClient;

const curl = "mongodb://127.0.0.1:27017";
const dbname = "devdiary";

mc.connect(curl, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log("Not connected ");

  const db = client.db(dbname);

  db.collection("users").insertOne({
    name: "Saurabh",
    age: 22,
  });
});
