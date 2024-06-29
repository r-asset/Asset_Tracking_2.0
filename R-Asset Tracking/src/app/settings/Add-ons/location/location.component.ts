import { Component } from '@angular/core';
import { SettingsService } from '../service/settings.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LocationComponent {




constructor(private service: SettingsService,private http: HttpClient){}

  ngOnInit(){

  }
 


}
