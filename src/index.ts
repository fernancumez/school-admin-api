import express, { Application } from "express";
import compression from "compression";
import passport from "passport";
import config from "./config";
import morgan from "morgan";

import { startConnection } from "./database";
import authRoutes from "./routes/auth.routes";
import welcomeRoutes from "./routes/welcome.routes";
import passportMiddleware from "./middlewares/passport";

const app: Application = express();

// Settings
app.set("port", parseInt(config.PORT));

// Middlewares
app.use(morgan("dev"));
app.use(compression());
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(welcomeRoutes);
app.use("/api", authRoutes);

const main = async (): Promise<void> => {
  await startConnection();

  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")} 🌎`);
};

main();
