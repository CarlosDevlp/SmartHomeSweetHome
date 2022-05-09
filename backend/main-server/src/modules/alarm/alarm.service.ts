import { Injectable } from '@nestjs/common';
import { successAction, failAction } from '../../shared/utils/response-builder';
import { join } from 'path';
import { Alarm, AlarmDocument } from 'src/shared/models/alarm.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
const player = require('play-sound')();

@Injectable()
export class AlarmService {
    private SOUNDS_PUBLIC_BASE_URI=join(__dirname, '../../..', 'public/sounds/');
    constructor(@InjectModel(Alarm.name) private alarmModel: Model<AlarmDocument>){}

    async getAllAlarmsData(){
        const alarms:Alarm[]=  await this.alarmModel.find().exec() || [];        
        return successAction(alarms,'Se ha retornado la data exitosamente');
    }

    async playAlarm(){
        return new Promise((resolve, reject)=>{
            console.log('current os path: ',this.SOUNDS_PUBLIC_BASE_URI+'alarm1.mp3');
            player.play(this.SOUNDS_PUBLIC_BASE_URI+'alarm1.mp3', function(err){
                if (err) return resolve(failAction(err));
                resolve(successAction([],'Se ha activado la alarma'))
            });
        });        
    }

    async activateAlarm(id:string){
        return new Promise(async (resolve, reject)=>{       
            try{
                const alarm:Alarm= await this.alarmModel.findById(id).exec();
                console.log('current os path: ',this.SOUNDS_PUBLIC_BASE_URI+alarm.applied_to);
                player.play(this.SOUNDS_PUBLIC_BASE_URI+alarm.applied_to, function(err){
                    if (err) return resolve(failAction(err));
                    resolve(successAction([],'Se ha activado la alarma'))
                });
            } catch(error)  {
                return resolve(failAction('Hubo un error y no se pudo obtener la información de la alarma'));
            }
            
        });
    }

    async findAlarmData(id:any){
        try{
            let alarm:Alarm= await this.alarmModel.findById(id).exec();
            return successAction([
                alarm
            ],'Se ha retornado la data exitosamente');
        }catch(error){
            return null;
        }        
    }
}
