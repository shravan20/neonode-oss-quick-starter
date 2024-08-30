import type { Request, Response } from "express";
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

const morganJsonFormat = (tokens, req: Request, res: Response) => {
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

const morganStringFormat = (tokens, req: Request, res: Response) => {
	return [
		`${tokens.method(req, res)} ${tokens.url(req, res)}`,
		`${tokens.status(req, res)} ${tokens["response-time"](req, res)} ms`,
		`- ${tokens["remote-addr"](req, res)}`,
		`User-Agent: ${tokens["user-agent"](req, res)}`,
	].join(" | ");
};

const morganMiddleware = morgan(process.env.FORMAT_LOGS_JSON ? morganJsonFormat : morganStringFormat, {
	stream: {
		write: (message: string) => logger.info(message.trim()),
	},
});

export { logger, morganMiddleware };
