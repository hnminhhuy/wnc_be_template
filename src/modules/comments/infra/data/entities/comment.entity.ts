import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'comments' })
export class CommentEntity {
  @PrimaryColumn()
  public id: number;

  @Column()
  public commentor: string;

  @Column()
  public content: string;

  @Column({ name: 'post_id' })
  public postId: number;

  @Column({ name: 'created_at' })
  public createdAt: Date;

  @Column({ name: 'updated_at' })
  public updatedAt: Date;
}
