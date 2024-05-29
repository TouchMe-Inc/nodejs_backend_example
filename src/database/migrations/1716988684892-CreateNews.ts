import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNews1716988684892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'news',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        //isGenerated: true,
                        //generationStrategy: 'increment'
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'body',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('news');
    }

}
