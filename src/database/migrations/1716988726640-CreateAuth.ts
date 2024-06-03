import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAuth1716988726640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'auth',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'provider_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'provider_id',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'provider_data',
                        type: "text"
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

        await queryRunner.createTable(
            new Table({
                name: 'session',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'auth_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'expires_at',
                        type: 'timestamp',
                        isNullable: false
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
        await queryRunner.dropTable('auth');
        await queryRunner.dropTable('session');
    }

}
