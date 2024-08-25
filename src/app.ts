import express, { type Express } from "express";
import { logger, morganMiddleware } from "./helpers/logger";

const app: Express = express();

app.set("trust proxy", true);

app.use(morganMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health-check", (_request, response, _next) => {
	response.send({
		heath: "up",
	});
});

// Error handling middleware
app.use((err, _req, res, _next) => {
	logger.error("An error occurred", { error: err.message });
	res.status(500).send("Internal Server Error");
});

export { app, logger };
