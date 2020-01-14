import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.interface';
import { TaskType } from './dto/task.dto';
import { TaskInput } from './input/tasks.input';
@Injectable()
export class TasksService {
    constructor( @InjectModel('Tasks') private taskModel: Model<Task>) {}

    getTasks = async (): Promise<TaskType[]> => await this.taskModel.find();

    getTask = async (id: string): Promise<TaskType> => await this.taskModel.findById(id);

    createTask = async (body: TaskType): Promise<TaskType> => {
        const newTask = new this.taskModel(body);
        return await newTask.save();
    }

    editTask = async (id: string, body: TaskInput): Promise<TaskType> => {
        return await this.taskModel.findOneAndUpdate({ _id: id }, body, { new: true });
    }

    deleteTask = async (id: string): Promise<TaskType> => {
        return await this.taskModel.findOneAndRemove({ _id: id });
    }
}
