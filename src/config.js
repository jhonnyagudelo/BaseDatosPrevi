import 'dotenv/config';

const configEnvi = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.HOST || 'localhost',
  dbHost: process.env.PGHOST || 'localhost',
  database: process.env.PGNAME,
  dbPort: process.env.PGPORT,
  dialect: 'postgres'
};

export default configEnvi;

export const keys = {
  publicKey: 'Secret-key-nya'
};