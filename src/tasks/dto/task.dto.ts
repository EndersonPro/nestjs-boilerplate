import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class TaskType {
    @Field(() => ID)
    readonly id?: string;
    @Field()
    readonly name: string;
    @Field()
    readonly description: string;
    @Field(() => Boolean)
    readonly complete: boolean;
}
