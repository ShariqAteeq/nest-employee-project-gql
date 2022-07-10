import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmpInput {
  @Field()
  fullName: String;
  @Field()
  designation: String;
  @Field({ nullable: true })
  city: String;
  @Field({ nullable: true })
  projectId: number;
}
