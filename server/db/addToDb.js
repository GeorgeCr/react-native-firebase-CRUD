const {client} = require('./dbConnect');

module.exports = {
  addQuery: (text, params) => client.query(text, params),
};
