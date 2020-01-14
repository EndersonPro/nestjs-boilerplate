import { Schema } from 'mongoose';
import { Task } from '../task.interface';

export const TasksSchema: Task = new Schema({
    name: String,
    description: String,
    complete: Boolean,
});
