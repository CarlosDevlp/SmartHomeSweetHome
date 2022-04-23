import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var JSMpeg: any;

@Component({
  selector: 'app-camera-viewer',
  templateUrl: './camera-viewer.component.html',
  styleUrls: ['./camera-viewer.component.scss'],
})
export class CameraViewerComponent implements OnInit {    
  private player:any;
  @Input() set wsPort(port:string){
    setTimeout(()=>{      
      this._port=port;      
      this.startPlayer();
    },100);    
  }; 
  @Output() onActivateCameraButtonClicked= new EventEmitter();
  private _port='0';
  showBtnActivateCamera=false;
  showLoading=false;

  constructor() { }

  ngOnInit() {}

  onCameraPlaying(){
    this.showBtnActivateCamera=false;        
    this.showLoading=false;
    console.log('La camara ha cargado exitosamente en el puerto: ',this._port);
  }

  onCameraError(){
    console.log('La camara no ha podido cargarse!');
  }

  activateCamera(){
    this.showBtnActivateCamera=false;
    this.showLoading=true;
    this.onActivateCameraButtonClicked.emit();
  }

  startPlayer(){
    this.showBtnActivateCamera=true;
    this.player = new JSMpeg.Player(environment.API_WS_BASE_URL+':'+this._port, {
      canvas: document.getElementById('camera-viewer'),
      preserveDrawingBuffer: true,
      onPlay: ()=>{
        this.onCameraPlaying();
      },
      //onEnded: this.onCameraError,
      //onStalled: this.onCameraError,
    });
  }

}
