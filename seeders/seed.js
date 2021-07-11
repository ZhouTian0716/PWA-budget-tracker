const Transaction = require('../models/transaction.js');
require("../config/connection.js");

const transactionSeed = [
  {
    name: "banana",
    value: 5
  },
  {
    name: "orange juice",
    value: 8
  },
  {
    name: "book",
    value: 6
  },
  {
    name: "milk",
    value: 6
  },
  {
    name: "lego",
    value: 15
  },
  {
    name: "coffee",
    value: 20
  },
  {
    name: "samon",
    value: 20
  },  
];

Transaction.deleteMany({})
  .then(() => Transaction.collection.insertMany(transactionSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
