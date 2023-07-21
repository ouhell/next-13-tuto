import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  personal_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    default: () => "CURRENT_TIMESTAMP",
    type: "timestamp",
    select: false,
  })
  created_at: Date;

  @Column({
    default: true,
  })
  is_active: boolean;
}
