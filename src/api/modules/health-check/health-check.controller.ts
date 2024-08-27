import type { Request, Response } from "express";
import { HealthService } from "./health-check.service";

export class HealthController {
	private healthService: HealthService;

	constructor() {
		this.healthService = new HealthService();
	}

	public getHealthStatus = (_req: Request, res: Response): void => {
		const healthStatus = this.healthService.checkHealth();
		res.status(200).json(healthStatus);
	};
}
