import type { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	public createUser = (req: Request, res: Response): void => {
		const userStatus = this.userService.create(req.body);
		res.status(200).json(userStatus);
	};

	public getUsers = (_req: Request, res: Response): void => {
		res.status(200).json({});
	};
}
