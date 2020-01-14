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

    @Query(() => TaskType)
    async task(@Args('id') idTask: string) {
        return this.tasksService.getTask(idTask);
    }

    @Mutation(() => TaskType)
    async createTask(@Args('input') task: TaskInput) {
        return this.tasksService.createTask(task);
    }

    @Mutation(() => TaskType)
    async updateTask(@Args('input') task: TaskInput, @Args('id') idTask: string) {
        return this.tasksService.editTask(idTask, task);
    }

    @Mutation(() => TaskType)
    async deleteTask(@Args('id') idTask: string) {
        return this.tasksService.deleteTask(idTask);
    }
}
