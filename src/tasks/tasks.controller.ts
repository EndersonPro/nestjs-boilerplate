import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private task: TasksService) {}

    @Get()
    getTasks(){
        return this.task.getTasks();
    }

    @Post()
    createTasks(@Body() taskBody){
        return this.task.createTask(taskBody);
    }

    @Put(':id')
    editTasks(@Param('id') idTask, @Body() body) {
        return this.task.editTask(idTask, body);
    }

    @Delete(':id')
    deleteTasks(@Param('id') idTask) {
        return this.task.deleteTask(idTask);
    }
}
