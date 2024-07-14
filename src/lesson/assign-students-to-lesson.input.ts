import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

const UUIDVersion = '4';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID(UUIDVersion)
  @Field((type) => ID)
  lessonId: string;

  @IsUUID(UUIDVersion, { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
