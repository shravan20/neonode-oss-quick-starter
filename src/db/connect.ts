import { AppDataSource } from "./config";

export const connectToDatabase = async (): Promise<void> => {
	try {
		await AppDataSource.initialize();
	} catch (error) {
		console.log(error);
		throw error;
	}
};
