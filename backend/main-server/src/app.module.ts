import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraModule } from './modules/camera/camera.module';
import { AlarmModule } from './modules/alarm/alarm.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public/',
      exclude: ['/api*'],
    }),
    CameraModule,  
    AlarmModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URI), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
