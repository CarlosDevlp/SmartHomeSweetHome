import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainSidebarComponent,
    LoadingComponent,
    MenuToolbarComponent    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    MainSidebarComponent,
    LoadingComponent,
    MenuToolbarComponent,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }
