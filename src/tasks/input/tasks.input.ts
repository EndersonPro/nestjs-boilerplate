import { Field, InputType } from 'type-graphql';

@InputType()
export class TaskInput {
    @Field()
    readonly name: string;
    @Field()
    readonly description: string;
    @Field(() => Boolean)
    readonly complete: boolean;
}
