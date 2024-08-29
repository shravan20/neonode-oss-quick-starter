// import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column("text")
	name: string;

	@Column("text")
	email: string;

	@Column("int")
	age: number;
}
