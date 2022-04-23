import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CameraViewerComponent } from './components/camera-viewer/camera-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule,
    SharedModule
  ],
  declarations: [CameraPage, CameraViewerComponent]
})
export class CameraPageModule {}
