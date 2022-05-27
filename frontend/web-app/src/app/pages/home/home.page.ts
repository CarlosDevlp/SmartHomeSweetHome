import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { Stat } from 'src/app/core/models/stat';
import { StatsService } from 'src/app/core/services/stats.service';
import { MenuToolbarComponent } from 'src/app/shared/components/menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  camerasStats:Stat[]=[];
  constructor(private statsService:StatsService, 
    private popoverController: PopoverController, 
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.fetchCameraStats();
  }

  fetchCameraStats(){
    this.statsService.getCamerasStats().then((stats:Stat[])=>{
      this.camerasStats=stats;
    }).catch((error)=>{
      console.log('Error, no se pudo conectar con el backend');
      //alert("No se pudo conectar con el backend");      
      this.showBackendErrorMessage();
    });
  }

  async showBackendErrorMessage(){
    const alert = await this.alertController.create({      
      header: '',
      message: 'Error, la aplicación no se pudo conectar con el servidor.',
      buttons: [     
        {
          text: 'Ir a configuración',
          id: 'confirm-button',
          handler: () => {
           this.router.navigate(['/configuration']);
          }
        }
      ]
    });

    await alert.present();
  }

  async showConfigurationMenu(ev){
    const popover = await this.popoverController.create({
      component: MenuToolbarComponent,
      event: ev,
      translucent: true,
      dismissOnSelect: true
    });
    await popover.present();
  }
}
