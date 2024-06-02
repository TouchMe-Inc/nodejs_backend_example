import {Column, Entity, OneToMany} from "typeorm";
import {Base} from "./base.entity";
import {AuthIdentity} from "./authIdentity.entity";
import {Session} from "./session.entity";

@Entity("auth")
export class Auth extends Base {
    @Column()
    userId!: number;

    @OneToMany(type => AuthIdentity, authIdentity => authIdentity.authId)
    identities?: AuthIdentity[];

    @OneToMany(type => Session, session => session.authId)
    session?: Session[];
}