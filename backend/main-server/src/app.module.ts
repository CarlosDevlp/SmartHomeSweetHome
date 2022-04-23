import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraModule } from './modules/camera/camera.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public/',
      exclude: ['/api*'],
    }),
    CameraModule,  
    MongooseModule.forRoot(process.env.MONGO_DB_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
