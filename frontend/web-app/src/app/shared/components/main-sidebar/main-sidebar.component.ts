import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/core/models/menu-item';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  @Input() menuItems:MenuItem[];
  constructor() { }

  ngOnInit() {}

}
