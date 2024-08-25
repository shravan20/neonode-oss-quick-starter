import { logger } from "@helpers/logger";
import { app } from "./app.ts";

const port = 8080;

const server = app.listen(port, () => {
	logger.info(`[server]: Server is running at http://localhost:${port}`);
});

const onCloseSignal = () => {
	logger.info("Received termination signal. Initiating graceful shutdown...");

	const handleServerClose = (): ((err?: Error) => void) | undefined => {
		return (err) => {
			if (err) {
				logger.error("Error occurred while closing the server:", err);
				process.exit(1); // Exit with failure
			} else {
				logger.info("Server closed successfully.");
				process.exit(0);
			}
		};
	};
	server.close(handleServerClose());

	const forceShutdownTimeout = setTimeout(() => {
		logger.error("Shutdown taking too long. Forcing exit.");
		process.exit(1);
	}, 10000);
	forceShutdownTimeout.unref();
};

["SIGINT", "SIGTERM"].map((signal) => {
	process.on(signal, onCloseSignal);
});
