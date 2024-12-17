import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class AddNewsComments1734419466015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          { name: 'id', type: 'serial', isPrimary: true },
          { name: 'commentor', type: 'varchar' },
          { name: 'content', type: 'text' },
          { name: 'post_id', type: 'integer' },
          { name: 'created_at', type: 'timestamp', default: 'NOW()' },
          { name: 'updated_at', type: 'timestamp', default: 'NOW()', onUpdate: 'NOW()' },
        ],
      }),
    );

    // Reference to post table
    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        columnNames: ['post_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'posts',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
