import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraModule } from './modules/camera/camera.module';

@Module({
  imports: [
    CameraModule,
    MongooseModule.forRoot('mongodb://localhost:27017/sweet_home')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
