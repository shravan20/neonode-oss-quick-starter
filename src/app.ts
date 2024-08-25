import express, { type Express } from "express";
import { pino } from "pino";

const logger = pino({ name: "Server Neonode" });
const app: Express = express();

app.set("trust proxy", true);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health-check", (_request, response, _next) => {
	response.send({
		heath: "up",
	});
});

export { app, logger };
