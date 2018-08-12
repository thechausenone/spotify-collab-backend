const mongoose = require('mongoose');

const { DB_URL } = process.env;

mongoose.connect(
  DB_URL,
  { useNewUrlParser: true },
  // eslint-disable-next-line
  () => console.log("Successfully connected to database.")
);
