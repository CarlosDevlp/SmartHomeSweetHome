import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'
import { AppConfigurationService } from 'src/app/core/services/app-configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {

  configurationForm: FormGroup;

  constructor(private fb: FormBuilder,private appConfigurationService:AppConfigurationService, private location: Location) { }

  ngOnInit() {
    console.log('configuration page init');
    this.configurationForm = this.fb.group({
      server_ip: [this.appConfigurationService.IP, [Validators.required]],
      server_port: [this.appConfigurationService.PORT, [Validators.required]],
    });
  }

  actualizarDatosDeConfiguracion(){
    const {server_ip, server_port} =this.configurationForm.value;
    this.appConfigurationService.updateConfigByIPandPort(server_ip, server_port);
    this.goBack();
  }

  goBack(){
    this.location.back();   
  }

}
