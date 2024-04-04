import { Client } from "pg";

const client = new Client({
  user: 'postgres',
  host: '',
  database: 'db1',
  // database: 'postgredb1',
  password: '',
  port: 5432, // Default PostgreSQL port
});


client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));


export default client
