import { Component } from '@angular/core';
import {ConfigService} from "../../services/config.service";
import {Config} from "../../config/Config";
import * as http from "http";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {

  private http
  private configService  = new ConfigService(this.http)

  private configuration:Config|undefined

 showConfig(){
    this.configService.getConfig().subscribe((data:Config) => this.configuration = {
      sourceUrl: (data as any).sourceUrl
    })
 }

 getConfigResponse(): Observable<HttpResponse<Config>>{
    return  this.http.get<Config>(
      this.configuration, {observe: 'response'}
    );
 }



}
