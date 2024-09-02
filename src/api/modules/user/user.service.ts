import type { User } from "@src/db/entities/user.entity";
import { UserRepository } from "./user.repository";

export class UserService {
	private userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	async create(user: Partial<User>): Promise<User> {
		return await this.userRepository.create(user);
	}

	async getAllUsers() {
		return await this.userRepository.findAll();
	}
}
