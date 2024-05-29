import {Base} from "./base.entity";
import {Column, Entity} from "typeorm";

@Entity("news")
export class News extends Base {
    @Column({nullable: false})
    title?: string;

    @Column({nullable: false})
    body?: string;
}