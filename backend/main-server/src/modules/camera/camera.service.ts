import { Injectable } from '@nestjs/common';

@Injectable()
export class CameraService {
    generateVideoStreaming(id: number){
        return 'Retornando señal de video de camara '+id
    }    
}
