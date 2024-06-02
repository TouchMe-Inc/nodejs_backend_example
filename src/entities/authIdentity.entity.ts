import {Column, Entity} from "typeorm";
import {Base} from "./base.entity";

@Entity("auth_identity")
export class AuthIdentity extends Base {
    @Column()
    userId!: number;

    @Column()
    providerName?: string;

    @Column()
    providerUserId?: string;

    @Column()
    providerData?: string;

    @Column()
    authId?: number;
}