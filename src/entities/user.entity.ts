import {Base} from "./base.entity";
import {Column, Entity, Index} from "typeorm";

@Entity("users")
export class User extends Base {
    @Column()
    @Index({unique: true})
    login!: string;

    @Column({select: false})
    password!: string;
}