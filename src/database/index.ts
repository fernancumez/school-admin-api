import { connect, connection, ConnectOptions } from "mongoose";
import config from "../config";

const startConnection = async (): Promise<void> => {
  try {
    const connectOption: ConnectOptions = {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await connect(config.DATABASE_URL, connectOption);
    console.log("Database is connected!");
    console.log(`Database name: ${connection.name}`);
  } catch (error) {
    console.error(error);
  }
};

export { startConnection };
