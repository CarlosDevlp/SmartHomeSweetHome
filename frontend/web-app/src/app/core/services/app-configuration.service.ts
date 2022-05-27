import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppConfigurationService {
  
  private config={
    API_BASE_URL: '',
    PUBLIC_IMAGES_URL: '',
    API_WS_BASE_URL: '',
    IP: '',
    PORT: ''
  };

  constructor() {    
    const configFromLocalStorage=this.getConfigFromLocalStorage();
    if(configFromLocalStorage){
      this.config= configFromLocalStorage;
    }else{
      const {API_BASE_URL, PUBLIC_IMAGES_URL, API_WS_BASE_URL}=environment;
      const {IP, PORT}= this.extractPortAndIP(API_BASE_URL);
      this.config= {
        API_BASE_URL, PUBLIC_IMAGES_URL, API_WS_BASE_URL,
        IP, PORT
      };
    }
    
  }

  updateConfigByIPandPort(ip:string, port:string){
    this.config.IP= ip;
    this.config.PORT= port;
    this.config.API_BASE_URL=  `http://${ip}:${port}`;
    this.config.PUBLIC_IMAGES_URL=  `http://${ip}:${port}/public/images`;
    this.config.API_WS_BASE_URL=  `ws://${ip}`;
    this.saveConfigToLocalStorage();
  } 

  get API_BASE_URL(){
    return this.config.API_BASE_URL;
  }

  get PUBLIC_IMAGES_URL(){
    return this.config.PUBLIC_IMAGES_URL;
  }

  get API_WS_BASE_URL(){
    return this.config.API_WS_BASE_URL;
  }

  get IP(){
    return this.config.IP;
  }

  get PORT(){
    return this.config.PORT
  }

  set API_BASE_URL(value:string){
    this.config.API_BASE_URL=value;
  }

  set PUBLIC_IMAGES_URL(value:string){
    this.config.PUBLIC_IMAGES_URL=value;
  }

  set API_WS_BASE_URL(value:string){
    this.config.API_WS_BASE_URL=value;
  }

  private saveConfigToLocalStorage(){
    localStorage.setItem('config', JSON.stringify(this.config));
  }

  private getConfigFromLocalStorage(){
    const config=JSON.parse(localStorage.getItem('config'));    
    return config;
  }

  private extractPortAndIP(baseUrl:string){
    let fullRoute=baseUrl.split('//');
    let IP='';
    let PORT='';
    if(fullRoute.length>=1){
      fullRoute=fullRoute[1].split(':');      
      IP=fullRoute[0]; 
      PORT=fullRoute[1];
    }
    return {IP, PORT}
  }
}
