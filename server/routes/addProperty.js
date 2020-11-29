const text =
  'INSERT INTO properties(propertyname, locationname, psize, price, yearofconstruction,numberoffloors, description, numberofbedrooms, numberofbathrooms, localamenities,propertytype, leasetype) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id';

module.exports = (app, addQuery) => {
  app.post('/property/add', async (req, res) => {
    const {data} = req.body;
    const values = Object.values(data);
    values.id = addQuery(text, values);
    res.send('Successfully added.');
  });
};
