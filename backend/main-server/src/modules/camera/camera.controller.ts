import { Controller, Get, Param, Req } from '@nestjs/common';
import { CameraService } from './camera.service';


@Controller('camera')
export class CameraController {
    constructor(private readonly cameraService:CameraService){}

    @Get()
    getAll(){
        return this.cameraService.getAllCamerasData();
    }


    @Get('stats')
    getCamerasStats() {        
        return this.cameraService.getActiveCamerasStats();
    }
    
    @Get(':id')
    getCamera(@Param('id') id) {        
        return this.cameraService.findCameraData(id);
    }
    
    @Get('help')
    salutation(): string {        
        return 'Please, select a camera to start streaming';
    }
    
    @Get('start')
    startStreaming() {        
        return this.cameraService.startVideoStreaming();
    }
   

    @Get(':id/start')
    startCameraConnection(@Param('id') id) {        
        return this.cameraService.startVideoStreamingByID(id);
    }
    
}
