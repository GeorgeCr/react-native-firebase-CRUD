const text = 'SELECT * FROM properties';

module.exports = (app, getQuery) => {
  app.get('/properties', (req, response) => {
    getQuery(text).then((res) => {
      return response.json(res.rows);
    });
  });
};
