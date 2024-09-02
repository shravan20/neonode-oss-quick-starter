import {
	CreateDateColumn,
	DeleteDateColumn,
	PrimaryGeneratedColumn,
	BaseEntity as TypeORMBaseEntity,
	UpdateDateColumn,
} from "typeorm";

export abstract class BaseEntity extends TypeORMBaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@CreateDateColumn({ type: "timestamp" })
	createdAt: Date;

	@UpdateDateColumn({ type: "timestamp" })
	updatedAt: Date;

	@DeleteDateColumn({ type: "timestamp", nullable: true })
	deletedAt?: Date;
}
