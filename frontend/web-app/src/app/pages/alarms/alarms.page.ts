import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Alarm } from 'src/app/core/models/alarm';
import { AlarmService } from 'src/app/core/services/alarm.service';


@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.page.html',
  styleUrls: ['./alarms.page.scss'],
})
export class AlarmsPage implements OnInit {

  alarms:Alarm[]=[];
  constructor(private alarmService: AlarmService, public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
    this.alarmService.getAlarmsData().then((alarms)=>{
      this.alarms= alarms;
      console.log('Alarms: ', alarms);
    });
  }

  async confirmAlarmActivation(alarmId:string) {
    const alert = await this.alertController.create({      
      header: '',
      message: '¿Desea activar la alarma?',
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
            this.activateAlarm(alarmId);
          }
        }
      ]
    });

    await alert.present();
  }


  activateAlarm(alarmId:string){    
    this.alarmService.activateAlarm(alarmId).then(async  (response:any)=>{
      if(response?.statusCode==200){
        const toast = await this.toastController.create({
          message: '¡Se ha activado la alarma!',
          duration: 2000
        });
        toast.present();
      }
    });
  }
}
