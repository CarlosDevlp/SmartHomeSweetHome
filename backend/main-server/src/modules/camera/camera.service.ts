import { Injectable } from '@nestjs/common';
import { successAction, failAction } from '../../shared/utils/response-builder';
const Stream = require('node-rtsp-stream');

@Injectable()
export class CameraService {
    generateVideoStreaming(id: number){
        return 'Retornando señal de video de camara '+id;      
    }    

    startVideoStreaming(){
        try{
            let stream = new Stream({
                name: 'name',
                streamUrl: 'rtsp://admin:OQQNKI@192.168.0.14:554/H.264',
                wsPort: 9999,
                ffmpegOptions: { // options ffmpeg flags
                    '-stats': '', // an option with no neccessary value uses a blank string
                    '-r': 30 // options with required values specify the value after the key
                }
            });            
            return successAction([],'Streaming ha sido activado para esta cámara');
        }catch(error){
            return failAction('Hubo un error al intentar realizar el streaming');
        }        
    }
}
