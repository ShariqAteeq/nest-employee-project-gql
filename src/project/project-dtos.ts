import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProInput {
  @Field()
  name: String;
  @Field()
  code: number;
}
