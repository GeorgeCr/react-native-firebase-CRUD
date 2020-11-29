const {client} = require('./dbConnect');

module.exports = {
  editQuery: (text, params) => client.query(text, params),
};
