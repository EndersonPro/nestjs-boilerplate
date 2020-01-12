import { Schema } from 'mongoose';

export const TasksSchema = new Schema({
    name: String,
    description: String,
    completed: Boolean,
});
