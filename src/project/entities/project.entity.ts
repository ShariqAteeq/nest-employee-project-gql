import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: String;
  @Field()
  @Column()
  name: String;
  @Field()
  @Column()
  code: number;
}
