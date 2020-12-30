const { NODE_ENV } = process.env;

const prodConfig: IProdconfig = {
  PORT: process.env.PORT || "6000",
  NODE_ENV: process.env.NODE_ENV || "production",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    `mongodb+srv://fernando:fernando@cluster0.oxbda.mongodb.net/school-db-${NODE_ENV}?retryWrites=true&w=majority`,
  USER: process.env.USER || "fernando",
  PASSWORD: process.env.PASSWORD || "fernando",
};

interface IProdconfig {
  PORT: string;
  NODE_ENV: string;
  CORS_ORIGIN: string;
  DATABASE_URL: string;
  USER: string;
  PASSWORD: string;
}

export default prodConfig;
