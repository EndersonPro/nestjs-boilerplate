import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TasksService {
    constructor( @InjectModel('Tasks') private taskModel) {}

    getTasks = async () => await this.taskModel.find();

    createTask = async (body) => {
        const newTask = new this.taskModel(body);
        return await newTask.save();
    }

    editTask = async (id, body) => {
        return await this.taskModel.findOneAndUpdate({ _id: id }, body, { new: true });
    }

    deleteTask = async (id) => {
        return await this.taskModel.findOneAndRemove({ _id: id });
    }
}
