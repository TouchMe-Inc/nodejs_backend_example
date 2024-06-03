import {Column, Entity} from "typeorm";
import {Base} from "./base.entity";

@Entity("session")
export class Session extends Base {
    @Column({name: "auth_id", nullable: false})
    authId!: number;

    @Column({name: "user_id", nullable: false})
    userId!: number;

    @Column({name: 'expires_at', nullable: false})
    expiresAt!: Date;
}