import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MainSidebarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MainSidebarComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
