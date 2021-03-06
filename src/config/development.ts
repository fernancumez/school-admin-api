import dotenv from "dotenv";
import { IDatabaseConfig } from "../types/config.types";
const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") dotenv.config();

const devConfig: IDatabaseConfig = {
  PORT: `${process.env.PORT}`,
  NODE_ENV: `${process.env.NODE_ENV}`,
  DATABASE_URI: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.oxbda.mongodb.net/${process.env.DATABASE_NAME}-${process.env.NODE_ENV}?retryWrites=true&w=majority`,
  JWT_KEY: `${process.env.JWT_KEY}`,
};

export default devConfig;
