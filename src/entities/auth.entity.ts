import {Column, Entity, OneToMany} from "typeorm";
import {Base} from "./base.entity";
import {Session} from "./session.entity";

@Entity("auth")
export class Auth extends Base {
    @Column({name: "user_id", nullable: false})
    userId!: number;

    @Column({name: "provider_name", nullable: false})
    providerName!: string;

    @Column({name: "provider_id"})
    providerId!: string;

    @Column({name: "provider_data"})
    providerData?: string;

    @OneToMany(type => Session, session => session.authId)
    session?: Session[];
}