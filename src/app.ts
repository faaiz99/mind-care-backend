import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Application } from "express";
import { connect } from "./configs/db/config.js";
import { therapistRouter } from "./routes/therapist/route.js";
import { adminRouter } from "./routes/admin/route.js";
import { clientRouter } from "./routes/client/route.js";
import { corsOptions } from "./utils/cors.util.js";
import { createServer } from "http";
import { handleError } from "./middlewares/error/middleware.js";
import { notFound } from "./middlewares/not-found/middlware.js";
import { preflight } from "./middlewares/preflight/middleware.js";
import webpush from "web-push";
import { limiter } from "./utils/rate-limiter.util.js";

// import compression from 'compression'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJSDoc from "swagger-jsdoc";
//import { options } from './utils/swagger.util.js'

if (process.env.NODE_ENV === "production") {
  if (
    process.env.MONGO_URI &&
    process.env.VPublicKey &&
    process.env.VPrivateKey
  ) {
    connect(process.env.MONGO_URI);
    webpush.setVapidDetails(
      "mailto:test@email.com",
      process.env.VPublicKey,
      process.env.VPrivateKey,
    );
  } else {
    console.error(
      "Environment variables MONGO_URI, VPublicKey, and VPrivateKey must be defined",
    );
  }
} else {
  dotenv.config();
  // Database Connection //
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  const VPublicKey: string | undefined = dotenv.config().parsed?.VPublicKey;
  const VPrivateKey: string | undefined = dotenv.config().parsed?.VPrivateKey;
  const MONGO_URI: string | undefined = dotenv.config().parsed?.MONGO_URI;
  if (VPublicKey && VPrivateKey && MONGO_URI) {
    connect(MONGO_URI);
    webpush.setVapidDetails(
      "mailto:faaizalam75@live.com",
      VPublicKey,
      VPrivateKey,
    );
  } else {
    console.error("VPublicKey and VPrivateKey must be defined");
  }
}
const baseUrl: string = "/api/v1";
export const app: Application = express();
app.use(limiter);
// const swaggerSpec = swaggerJSDoc(options);

// app.use(compression)

// CORS Policy //
app.use(preflight);
app.use(cors(corsOptions));

// API Documentation Setup //
// app.use(`${baseUrl}/docs`, swaggerUi.serve);
// app.get(`${baseUrl}/docs`, swaggerUi.setup(swaggerSpec));

// Router //
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Entry Points for Users //
app.use(`${baseUrl}/client`, clientRouter);
app.use(`${baseUrl}/therapist`, therapistRouter);
app.use(`${baseUrl}/admin`, adminRouter);

// Main Endpoint //
app.get(`${baseUrl}`, (req, res): void => {
  res.send("Mind Care API");
});

app.use(notFound);
app.use(handleError);

export const httpServer = createServer(app);
