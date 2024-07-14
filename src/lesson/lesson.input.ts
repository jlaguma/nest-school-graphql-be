import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

const UUIDVersion = '4';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(8)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @Field((type) => [ID], { defaultValue: [] })
  @IsUUID(UUIDVersion, { each: true })
  students: string[];
}
