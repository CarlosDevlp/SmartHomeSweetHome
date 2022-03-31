import { Controller, Get, Param, Req } from '@nestjs/common';
import { CameraService } from './camera.service';

@Controller('camera')
export class CameraController {
    constructor(private readonly cameraService:CameraService){}

    @Get()
    salutation(): string {        
        return 'Please, select a camera to start streaming';
    }

    @Get(':id')
    getCamera(@Param('id') id): string {        
        return this.cameraService.generateVideoStreaming(id);
    }
}
