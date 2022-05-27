import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Stat } from '../models/stat';
import { AppConfigurationService } from './app-configuration.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  stats:Stat[]=[];
  constructor(private http: HttpClient, private appConfigurationService: AppConfigurationService) { }

  private convertDataToStats(data:[]):Stat[]{
    this.stats=[];    
    data.forEach((item)=>{
      this.stats.push(this.convertDataToStat(item));
    });
    return this.stats;
  }

  private convertDataToStat(data):Stat{
    let { name, label, value } = data;   
    return {      
      name,
      label,
      value
    };
  }

  getCamerasStats():Promise<Stat[]>{
    return this.http.get(this.appConfigurationService.API_BASE_URL+'/camera/stats').pipe(      
      map(({data}:any)=>{
        return this.convertDataToStats(data);
      })      
    ).toPromise();
  }
}
