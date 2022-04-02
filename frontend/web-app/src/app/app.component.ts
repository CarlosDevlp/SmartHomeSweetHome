import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuItems:MenuItem[] = [
    { label: 'Home', url: '/home', icon: 'home' },
    { label: 'Camaras', url: '/cameras', icon: 'caret-forward-circle' },
    { label: 'Alarmas', url: '/alarms', icon: 'notifications' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
