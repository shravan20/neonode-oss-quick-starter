import { Router } from "express";
import { UserController } from "./user.controller";

export class UserRouter {
	public router: Router;
	private userController: UserController;

	constructor() {
		this.router = Router();
		this.userController = new UserController();
		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router.get("/users", this.userController.getUsers);
		this.router.post("/users", this.userController.createUser);
	}
}
