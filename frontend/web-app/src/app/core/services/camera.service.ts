import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { debounceTime, map } from 'rxjs/operators';
import { Camera } from '../models/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private cameras:Camera[]=[];    
  constructor(private http: HttpClient) { }

  /**
   * 
   * @param data 
   */
  /* "_id": "6256062cc874a748982fbb7a",
            "description": "Cámara a la calle",
            "name": "Street",
            "protocol": "rtsp",
            "url": "rtsp://admin:OQQNKI@192.168.0.14:554/H.264",
            "ws_port": "9999",
            "image_url": "http://localhost:3000/public/images/street.png" */
  private convertDataToCameras(data:[]):Camera[]{
    this.cameras=[];    
    data.forEach((item)=>{
      this.cameras.push(this.convertDataToCamera(item));
    });
    return this.cameras;
  }
  
  private convertDataToCamera(data):Camera{
    let {_id, description, name, protocol, url, ws_port, image_url } = data;   
    return {
      id:  _id,
      description,
      name,
      protocol, 
      url, 
      ws_port, 
      image_url: environment.PUBLIC_IMAGES_URL+'/'+ image_url
    };
  }

  getCameraData(id:string):Promise<Camera>{    
    let camera:Camera=this.cameras.find((camera:Camera)=>camera.id==id);
    if(camera){
      return new Promise<Camera>((resolve, reject)=>{
        resolve(camera);
      });
    }

    return this.http.get(environment.API_BASE_URL+'/camera/'+id).pipe(      
      map(({data}:any)=>{
        return this.convertDataToCamera(data[0]);
      })    
    ).toPromise();
  }

  getCamerasData():Promise<Camera[]>{    
    if(this.cameras?.length>0){
      return new Promise<Camera[]>((resolve, reject)=>{
        resolve(this.cameras);
      });
    }
    return this.http.get(environment.API_BASE_URL+'/camera').pipe(      
      map(({data}:any)=>{
        return this.convertDataToCameras(data);
      })      
    ).toPromise();
  }

  startCamera(id:string){
    return this.http.get(environment.API_BASE_URL+'/camera/'+id+'/start').toPromise();
  }
}
