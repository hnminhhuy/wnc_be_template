import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryColumn()
  public readonly id: number;

  @Column()
  public readonly title: string;

  @Column()
  public readonly topic: string;

  @Column()
  public readonly labels: string;

  @Column()
  public readonly content: string;

  @Column({ name: 'created_at' })
  public readonly createdAt: Date;

  @Column({ name: 'updated_at' })
  public readonly updatedAt: Date;
}
