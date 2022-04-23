import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera } from 'src/app/core/models/camera';
import { CameraService } from 'src/app/core/services/camera.service';
import { CameraViewerComponent } from './components/camera-viewer/camera-viewer.component';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  @ViewChild('cameraViewer') cameraViewer:CameraViewerComponent;
  camera:Camera;

  constructor(private route: ActivatedRoute, private cameraService: CameraService,public alertController: AlertController) { }

  ngOnInit() {
    const cameraId= this.route.snapshot.paramMap.get('cameraId') || -1;
    console.log('cameraId: ', cameraId);
    if(cameraId!=-1) this.cameraService.getCameraData(cameraId+'').then((camera:Camera)=>{
      this.camera=camera;
    });    
  }

  startCamera(){    
    this.cameraService.startCamera(this.camera.id).then((response:any)=>{
      if(response?.statusCode==200){
        this.cameraViewer.startPlayer();
      }
    });
  }

  async confirmForceCameraRestart() {
    const alert = await this.alertController.create({      
      header: '',
      message: '¿Desea forzar la activación de la cámara?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',          
        }, {
          text: 'Sí',
          id: 'confirm-button',
          handler: () => {
            this.startCamera();
          }
        }
      ]
    });

    await alert.present();
  }

}
