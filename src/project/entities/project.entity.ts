import { Field, ObjectType } from '@nestjs/graphql';
import { Employee } from 'src/employee/entities/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;
  @Field()
  @Column()
  name: String;
  @Field()
  @Column()
  code: number;

  @OneToMany(() => Employee, (emp) => emp.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
