module.exports = (app, deleteQuery) => {
  app.post('/property/delete', async (req, res) => {
    const {id} = req.body;
    deleteQuery(id);
    return res.send('Deleted successfully');
  });
};
