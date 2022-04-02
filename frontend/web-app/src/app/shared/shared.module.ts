import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MainSidebarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MainSidebarComponent
  ]
})
export class SharedModule { }
