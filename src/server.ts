import { logger } from "@helpers/logger";
import { App } from "./app";

export class Server {
	private app: App;
	private port: number | string;
	private server: ReturnType<typeof App.prototype.app.listen>;

	constructor(port: number | string = process.env.PORT || 8080) {
		this.port = port;
		this.app = new App();
	}

	public start(): void {
		this.server = this.app.app.listen(this.port, () => {
			logger.info(`[server]: Server is running at http://localhost:${this.port}`);
		});

		this.handleSignals();
	}

	private handleSignals(): void {
		const onCloseSignal = () => {
			logger.info("Received termination signal. Initiating graceful shutdown...");

			const handleServerClose = (err?: Error): void => {
				if (err) {
					logger.error("Error occurred while closing the server:", { error: err });
					process.exit(1);
				} else {
					logger.info("Server closed successfully.");
					process.exit(0);
				}
			};
			this.server.close(handleServerClose);

			const forceShutdownTimeout = setTimeout(() => {
				logger.error("Shutdown taking too long. Forcing exit.");
				process.exit(1);
			}, 10000);
			forceShutdownTimeout.unref();
		};

		["SIGINT", "SIGTERM"].map((signal) => {
			process.on(signal, onCloseSignal);
		});
	}
}

const server = new Server();
server.start();
