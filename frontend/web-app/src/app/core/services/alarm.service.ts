import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alarm } from '../models/alarm';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private alarms:Alarm[]=[];  
  constructor(private http: HttpClient) { }

  private convertDataToAlarms(data:[]):Alarm[]{
    this.alarms=[];    
    data.forEach((item)=>{
      this.alarms.push(this.convertDataToAlarm(item));
    });
    return this.alarms;
  }
  
  private convertDataToAlarm(data):Alarm{
    let {_id, description, name, type, action, applied_to, duration } = data;
    return {
      id:  _id,
      description,
      name,
      type, 
      action, 
      applied_to, 
      duration
      //image_url: environment.PUBLIC_IMAGES_URL+'/'+ image_url
    };
  }

  getAlarmsData():Promise<Alarm[]>{    
    if(this.alarms?.length>0){
      return new Promise<Alarm[]>((resolve, reject)=>{
        resolve(this.alarms);
      });
    }
    return this.http.get(environment.API_BASE_URL+'/alarm').pipe(      
      map(({data}:any)=>{
        return this.convertDataToAlarms(data);
      })      
    ).toPromise();
  }

  activateAlarm(id:string){
    return this.http.get(environment.API_BASE_URL+'/alarm/'+id+'/activate').toPromise();
  }

}
