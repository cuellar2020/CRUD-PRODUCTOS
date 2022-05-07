
const mongoose = require('mongoose');


const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};
const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.lw4d7.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;


mongoose.connect(url, options).then( function() {
    console.log('MongoDB is connected');
  })
    .catch( function(err) {
    console.log(err);
  });
require('./employee.model');