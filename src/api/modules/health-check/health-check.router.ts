import { Router } from "express";
import { HealthController } from "./health-check.controller";

export class HealthRouter {
	public router: Router;
	private healthController: HealthController;

	constructor() {
		this.router = Router();
		this.healthController = new HealthController();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get("/health", this.healthController.getHealthStatus);
	}
}
