const text =
  'UPDATE properties SET propertyname = $1, locationname = $2, psize = $3, price = $4, yearofconstruction = $5, numberoffloors = $6, description = $7, numberofbedrooms = $8, numberofbathrooms = $9, localamenities = $10,propertytype = $11, leasetype = $12 WHERE id = $13 RETURNING *';

module.exports = (app, editQuery) => {
  app.post('/property/edit', async (req, res) => {
    const {data} = req.body;
    const values = Object.values(data);
    editQuery(text, values);
    res.send('Successfully edited.');
  });
};
