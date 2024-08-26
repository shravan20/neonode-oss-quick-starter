// import express, { type Express, Application } from "express";
// import { logger, morganMiddleware } from "@helpers/logger";

// const app: Express = express();

// app.set("trust proxy", true);

// app.use(morganMiddleware);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/health-check", (_request, response, _next) => {
// 	response.send({
// 		heath: "up",
// 	});
// });

// // Error handling middleware
// app.use((err, _req, res, _next) => {
// 	logger.error("An error occurred", { error: err.message });
// 	res.status(500).send("Internal Server Error");
// });

// export { app, logger };

import { logger, morganMiddleware } from "@helpers/logger";
import express, { type Express, Application, type Request, type Response, type NextFunction } from "express";
import { HealthRouter } from "./api/modules/health-check/health-check.router";

export class App {
	public app: Express;

	constructor() {
		this.app = express();
		this.initializeMiddlewares();
		this.initializeRoutes();
		this.initializeErrorHandling();
	}

	private initializeMiddlewares(): void {
		this.app.set("trust proxy", true);
		this.app.use(morganMiddleware);
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
	}

	private initializeRoutes(): void {
		const healthRouter = new HealthRouter();
		this.app.use(healthRouter.router);
	}

	private initializeErrorHandling(): void {
		this.app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
			logger.error("An error occurred", { error: err.message });
			res.status(500).send("Internal Server Error");
		});
	}
}
