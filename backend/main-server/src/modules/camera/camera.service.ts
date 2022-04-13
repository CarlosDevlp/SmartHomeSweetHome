import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camera, CameraDocument } from 'src/shared/models/camera.schema';
import { Model } from 'mongoose';
import { successAction, failAction } from '../../shared/utils/response-builder';
const Stream = require('node-rtsp-stream');

@Injectable()
export class CameraService {

    constructor(@InjectModel(Camera.name) private cameraModel: Model<CameraDocument>) {}

    async getAllCamerasData(): Promise<Camera[]>{
         return await this.cameraModel.find().exec() || [];
    }

    async findCameraData(id:any): Promise<Camera>{
        try{
            return await this.cameraModel.findById(id).exec();
        }catch(error){
            return null;
        }
        
    }


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
