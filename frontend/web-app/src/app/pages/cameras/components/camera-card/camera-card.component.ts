import { Component, Input, OnInit } from '@angular/core';
import { Camera } from 'src/app/core/models/camera';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.component.html',
  styleUrls: ['./camera-card.component.scss'],
})
export class CameraCardComponent implements OnInit {
  @Input() camera:Camera;
  constructor() { }

  ngOnInit() {}

}
