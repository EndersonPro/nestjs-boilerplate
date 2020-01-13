import { TasksService } from './tasks.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskType } from './dto/task.dto';
import { TaskInput } from './input/tasks.input';

@Resolver('Tasks')
export class TasksResolver {

    constructor(private tasksService: TasksService) { }

    @Query(() => [TaskType])
    async tasks() {
        return this.tasksService.getTasks();
    }

    @Mutation(() => TaskType)
    async createTask(@Args('input') task: TaskInput) {
        return this.tasksService.createTask(task);
    }
}
