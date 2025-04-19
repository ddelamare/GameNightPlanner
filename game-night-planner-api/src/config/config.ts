import dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: './.env.secrets' });


interface Config {
  port: number;
  nodeEnv: string;
  dbUser: string;
  dbPass: string;
  dbServer: string;
  dbPort: number;
  dbName: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbUser: process.env.DB_USER || "",
  dbPass: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbPort:  Number(process.env.DB_PORT) || 1433,
  dbName: process.env.DB_NAME || "",
};

console.log("db-name", process.env.DB_NAME);

export default config;