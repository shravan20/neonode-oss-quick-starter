import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	synchronize: true, // TODO: Set to false in production; fix via env config file
	logging: true,
	poolSize: 3,
	entities: [`${__dirname}/entities/*.ts`],
	migrations: [`${__dirname}/migrations/*.ts`],
	subscribers: [`${__dirname}/subscribers/*.ts`],
	ssl: {
		rejectUnauthorized: false, // Required for Neon.tech SSL connections
	},
	extra: {
		sslmode: "require", // Force SSL mode
	},
});
