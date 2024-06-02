import {Column, Entity} from "typeorm";
import {Base} from "./base.entity";

@Entity("session")
export class Session extends Base {
    @Column()
    userId!: number;

    @Column()
    authId!: number;

    @Column()
    expiresAt?: Date;
}