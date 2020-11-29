const {Client} = require('pg');
const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  user: 'postgres',
  password: 'password',
});

const connectToDb = async () => {
  console.log('connecting to db...');
  await client.connect();
};

module.exports = {
  client,
  connectToDb,
};
