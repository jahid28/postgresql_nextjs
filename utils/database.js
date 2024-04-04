import { Client } from "pg";

const client = new Client({
  user: 'postgres',
  host: 'database-2.cfc6wmay0j3n.us-east-1.rds.amazonaws.com',
  database: 'db1',
  // database: 'postgredb1',
  password: 'Jahidkhan786',
  port: 5432, // Default PostgreSQL port
});


client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));


export default client
