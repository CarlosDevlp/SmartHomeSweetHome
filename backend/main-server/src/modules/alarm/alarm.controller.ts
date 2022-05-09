import { Controller, Get, Param } from '@nestjs/common';
import { AlarmService } from './alarm.service';

@Controller('alarm')
export class AlarmController {
    constructor(private readonly alarmService:AlarmService){}

    @Get()
    getAll(){
        return this.alarmService.getAllAlarmsData();
    }

    @Get(':id/activate')
    playAlarm(@Param('id') id){
        return this.alarmService.activateAlarm(id);
    }

}
