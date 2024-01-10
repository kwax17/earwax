const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/earwax',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log(err);
  }
);

module.exports = mongoose.connection;
