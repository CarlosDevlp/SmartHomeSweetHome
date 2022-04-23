import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/core/models/stat';
import { StatsService } from 'src/app/core/services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  camerasStats:Stat[]=[];
  constructor(private statsService:StatsService) { }

  ngOnInit() {
    this.fetchCameraStats();
  }

  fetchCameraStats(){
    this.statsService.getCamerasStats().then((stats:Stat[])=>{
      this.camerasStats=stats;
    });
  }
}
