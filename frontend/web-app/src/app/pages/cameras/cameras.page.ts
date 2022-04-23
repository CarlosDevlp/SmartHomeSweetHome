import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/core/models/camera';
import { CameraService } from 'src/app/core/services/camera.service';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.page.html',
  styleUrls: ['./cameras.page.scss'],
})
export class CamerasPage implements OnInit {
  cameras:Camera[]=[];
  constructor(private cameraService: CameraService) { }

  ngOnInit() {
    this.cameraService.getCamerasData().then((cameras)=>{
      this.cameras= cameras;
      console.log('Cameras: ', cameras);
    });
  }

}
