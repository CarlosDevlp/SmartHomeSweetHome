import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmsPageRoutingModule } from './alarms-routing.module';

import { AlarmsPage } from './alarms.page';
import { AlarmCardComponent } from './components/alarm-card/alarm-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmsPageRoutingModule,
    SharedModule
  ],
  declarations: [AlarmsPage, AlarmCardComponent]
})
export class AlarmsPageModule {}
