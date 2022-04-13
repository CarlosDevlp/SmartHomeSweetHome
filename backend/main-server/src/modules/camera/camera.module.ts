import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Camera, CameraSchema } from 'src/shared/models/camera.schema';
import { CameraController } from './camera.controller';
import { CameraService } from './camera.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Camera.name, schema: CameraSchema }])],
  controllers: [CameraController],
  providers: [CameraService]
})
export class CameraModule {}
