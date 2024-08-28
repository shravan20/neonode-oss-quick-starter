import { logger, morganMiddleware } from "@helpers/logger";
import dotenv from "dotenv";
import express, { type Express, Application, type Request, type Response, type NextFunction } from "express";
import { HealthRouter } from "./api/modules/health-check/health-check.router";
import { connectToDatabase } from "./db/connect";

export class App {
	public app: Express;

	constructor() {
		dotenv.config();
		this.app = express();
		this.initializeMiddlewares();
		this.initializeRoutes();
		this.initializeErrorHandling();

		this.initializeDatabaseConnection();
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
			res.status(500).json({
				message: "Internal Server Error",
				error: err.message,
			});
		});
	}

	private async initializeDatabaseConnection(): Promise<void> {
		try {
			await connectToDatabase();
			logger.info("Connected to the database");
		} catch (error) {
			logger.error("Failed to connect to the database", { error: (error as Error).message });
			process.exit(1);
		}
	}
}
