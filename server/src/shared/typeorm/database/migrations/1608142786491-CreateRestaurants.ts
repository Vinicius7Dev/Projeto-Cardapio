/**
 * Migration - Restaurants Table
 */

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateRestaurants1608142786491
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'restaurants',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        isPrimary: true,
                    },
                    {
                        name: 'trade',
                        type: 'varchar',
                        length: '25',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        length: '11',
                    },
                    {
                        name: 'telephone',
                        type: 'varchar',
                        length: '11',
                    },
                    {
                        name: 'logo',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'menu_code',
                        type: 'int',
                        generationStrategy: 'increment',
                        isGenerated: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('restaurants');
    }
}
