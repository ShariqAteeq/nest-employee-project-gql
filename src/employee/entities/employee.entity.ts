import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: String;
  @Field()
  @Column()
  fullName: String;
  @Field()
  @Column()
  designation: String;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: String;
}
