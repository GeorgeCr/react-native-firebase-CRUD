const {client} = require('./dbConnect');

module.exports = {
  deleteQuery: (id) => {
    return client.query(`DELETE FROM properties WHERE id = ${id}`);
  },
};
