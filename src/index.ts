import express, { Express, Request, Response } from "express";
import compression from "compression";
import morgan from "morgan";
import config from "./config";

const app: Express = express();

// Settings
app.set("port", parseInt(config.PORT));

// Middlewares
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/api", (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Hello world" });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(app.get("port"));
console.log(`Server on port ${app.get("port")} 🌎`);
console.log(config);
