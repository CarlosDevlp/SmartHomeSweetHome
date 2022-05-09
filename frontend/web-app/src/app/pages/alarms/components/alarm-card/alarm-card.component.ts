import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alarm } from 'src/app/core/models/alarm';

@Component({
  selector: 'app-alarm-card',
  templateUrl: './alarm-card.component.html',
  styleUrls: ['./alarm-card.component.scss'],
})
export class AlarmCardComponent implements OnInit {
  @Input() alarm:Alarm;
  @Output() onAlarmActivationClick=new EventEmitter();
  actionDisabled=false;
  constructor() { }

  ngOnInit() {}

  alarmAction(){
    //this.actionDisabled=true;
    this.onAlarmActivationClick.emit();
    /*setTimeout(()=>{
      this.actionDisabled=false;
    },this.alarm.duration * 1000);*/
  }
}
