import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo_db:27017/my_app_nest_docker', { useNewUrlParser: true, useUnifiedTopology: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
