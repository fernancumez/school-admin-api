import dotenv from "dotenv";
const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") dotenv.config();

const devConfig: IDevconfig = {
  PORT: process.env.PORT || "4000",
  NODE_ENV: process.env.NODE_ENV || "development",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oxbda.mongodb.net/school-db-${NODE_ENV}?retryWrites=true&w=majority`,
  USER: process.env.USER || "fernando",
  PASSWORD: process.env.PASSWORD || "fernando",
};

interface IDevconfig {
  PORT: string;
  NODE_ENV: string;
  CORS_ORIGIN: string;
  DATABASE_URL: string;
  USER: string;
  PASSWORD: string;
}

export default devConfig;
