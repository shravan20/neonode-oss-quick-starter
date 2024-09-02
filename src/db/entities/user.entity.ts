// import "reflect-metadata";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class User extends BaseEntity {
	@Column("text")
	name: string;

	@Column("text")
	email: string;

	@Column("int")
	age: number;
}
