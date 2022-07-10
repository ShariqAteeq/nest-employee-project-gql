import { Field, ObjectType } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Project, (pro) => pro.employees)
  @Field(() => Project, { nullable: true })
  project: Project;

  @Field({ nullable: true })
  @Column({ nullable: true })
  projectId: number;
}
