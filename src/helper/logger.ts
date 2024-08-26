import morgan from "morgan";
import winston, { format, transports } from "winston";

const logFormat = format.combine(format.timestamp(), format.json());
const logger = winston.createLogger({
	level: process.env.LOG_LEVEL || "info",
	format: format.combine(format.timestamp(), format.json(), logFormat),
	transports: [
		new transports.Console({
			format: format.combine(
				format.timestamp(),
				// format.colorize(),
				logFormat,
			),
		}),
		// Add more transports (file, HTTP, etc.)
	],
});

const morganJsonFormat = (tokens, req, res) => {
	return JSON.stringify({
		timestamp: new Date().toISOString(),
		method: tokens.method(req, res),
		url: tokens.url(req, res),
		status: tokens.status(req, res),
		responseTime: tokens["response-time"](req, res),
		remoteAddr: tokens["remote-addr"](req, res),
		userAgent: tokens["user-agent"](req, res),
	});
};

const morganMiddleware = morgan(morganJsonFormat, {
	stream: {
		write: (message: string) => logger.info(message.trim()),
	},
});

export { logger, morganMiddleware };
