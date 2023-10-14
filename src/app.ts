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

// import compression from 'compression'
// import swaggerUi from 'swagger-ui-express'
// import swaggerJSDoc from "swagger-jsdoc";
//import { options } from './utils/swagger.util.js'

dotenv.config();

// Database Connection //
connect(dotenv.config().parsed?.MONGO_URI);

const baseUrl: string = "/api/v1";
export const app: Application = express();
// const swaggerSpec = swaggerJSDoc(options);

// app.use(compression)

// CORS Policy //

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

app.use(handleError);

export const httpServer = createServer(app);
