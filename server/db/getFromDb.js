const {client} = require('./dbConnect');

module.exports = {
  getQuery: (text) => client.query(text),
};
