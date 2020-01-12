import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

import { TasksSchema } from './schema/tasks.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: 'Tasks', schema: TasksSchema }]
    ),
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
