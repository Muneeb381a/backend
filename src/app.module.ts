import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://muneebafzal381a:muneebafzal@cluster0.16yd1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
