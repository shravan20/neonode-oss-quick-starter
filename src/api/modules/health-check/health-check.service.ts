export class HealthService {
	public checkHealth(): { status: string } {
		return { status: "Healthy" };
	}
}
