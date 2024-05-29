import {Base} from "./base.entity";
import {Column, Entity} from "typeorm";

@Entity()
export class News extends Base {
    @Column({nullable: false})
    title?: string;

    @Column({nullable: false})
    body?: string;
}