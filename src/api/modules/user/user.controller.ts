import type { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	public createUser = async (req: Request, res: Response): Promise<void> => {
		const user = await this.userService.create(req.body);
		res.status(200).json(user);
	};

	public getUsers = async (_req: Request, res: Response): Promise<void> => {
		res.status(200).json(await this.userService.getAllUsers());
	};
}
