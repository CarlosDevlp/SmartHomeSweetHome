import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camera, CameraDocument } from 'src/shared/models/camera.schema';
import { Model } from 'mongoose';
import { successAction, failAction } from '../../shared/utils/response-builder';
import { Stat } from 'src/shared/models/stat';
const Stream = require('node-rtsp-stream');

@Injectable()
export class CameraService {

    private streamings:any[]=[];

    constructor(@InjectModel(Camera.name) private cameraModel: Model<CameraDocument>) {}

    private async fetchCameras(){
        try{
            const cameras:Camera[]=  await this.cameraModel.find().exec() || [];
            return cameras;//.map((camera:Camera)=> this.setCameraDataCompleteImageUrl(camera));
        }catch(error){
            throw "Hubo un error al intentar devolver el valor de la base de datos";
        }        
    }

    private setCameraDataCompleteImageUrl(camera: Camera){
        camera.image_url=process.env.PUBLIC_IMAGE_URI+camera.image_url;
        return camera;
    }

    async getAllCamerasData(){
         const cameras:Camera[]=  await this.fetchCameras();
         return successAction(cameras,'Se ha retornado la data exitosamente');
    }

    async findCameraData(id:any){
        try{
            let camera:Camera= await this.cameraModel.findById(id).exec();
            return successAction([
                camera
                //this.setCameraDataCompleteImageUrl(camera)
            ],'Se ha retornado la data exitosamente');
        }catch(error){
            return null;
        }        
    }

    getActiveCamerasStats(){
        const stat:Stat={
            name:'active-cameras-count',
            label: 'Cámaras activas',
            value: this.streamings.length+''
        };
        return successAction([stat],'Se retornaron los stats exitosamente');
    }

    generateVideoStreaming(id: number){        
        return 'Retornando señal de video de camara '+id;      
    }    

    async startVideoStreamingByID(id){                
        try{
            const camera: Camera=await this.cameraModel.findById(id).exec();
            const stream = new Stream({
                name: 'name',
                streamUrl: camera.url, //'rtsp://admin:OQQNKI@192.168.0.14:554/H.264',
                wsPort: Number(camera.ws_port),
                ffmpegOptions: { // options ffmpeg flags
                    '-stats': '', // an option with no neccessary value uses a blank string
                    '-r': 30 // options with required values specify the value after the key
                }
            });  
            this.streamings.push(stream);
            return successAction([],'Streaming ha sido activado para esta cámara: '+camera.name);
        }catch(error){
            return failAction('Hubo un error al intentar realizar el streaming');
        }
    }

    /**
     * Remove this method
     * @deprecated 
     */
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
