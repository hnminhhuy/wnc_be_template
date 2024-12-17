import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddNewsTable1734419051277 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'title', type: 'text' },
          { name: 'topic', type: 'varchar' },
          { name: 'labels', type: 'varchar' },
          { name: 'content', type: 'text' },
          { name: 'created_at', type: 'timestamp', default: 'NOW()' },
          { name: 'updated_at', type: 'timestamp', default: 'NOW()', onUpdate: 'NOW()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('posts');
  }
}
