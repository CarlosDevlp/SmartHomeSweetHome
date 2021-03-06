import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerasPageRoutingModule } from './cameras-routing.module';

import { CamerasPage } from './cameras.page';
import { CameraCardComponent } from './components/camera-card/camera-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerasPageRoutingModule,
    SharedModule
  ],
  declarations: [CamerasPage, CameraCardComponent]
})
export class CamerasPageModule {}
