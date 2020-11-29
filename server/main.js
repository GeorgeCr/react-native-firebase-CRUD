const express = require('express');
const bodyParser = require('body-parser');
const {connectToDb} = require('./db/dbConnect');
const {addQuery} = require('./db/addToDb');
const addProperty = require('./routes/addProperty');
const getProperties = require('./routes/getProperties');
const {getQuery} = require('./db/getFromDb');
const deleteProperty = require('./routes/deleteProperty');
const {deleteQuery} = require('./db/deleteFromDb');
const {editQuery} = require('./db/editInDb');
const editProperty = require('./routes/editProperty');

const PORT = '3000';
const HOSTNAME = '192.168.0.185';

const app = express();
app.use(bodyParser.json());

const waitForDb = async () => {
  try {
    await connectToDb();
    addProperty(app, addQuery);
    getProperties(app, getQuery);
    deleteProperty(app, deleteQuery);
    editProperty(app, editQuery);
  } catch (err) {
    console.log(err);
  }
};

waitForDb();

app.listen(PORT, HOSTNAME, () => console.log(`App listening on port ${PORT}.`));
