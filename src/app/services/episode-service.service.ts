import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Episode} from "../models/Episode";

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService {

  constructor(private http:HttpClient) {

  }
    configurl:string = "assets/config.json"

  getEpisode(episodeId: string){
    return this.http.get<Episode>(this.configurl + episodeId, {
      headers: new HttpHeaders()
    })
  }

  getEpisodesBySeason(){
    return this.http.get<Episode[]>(this.configurl + "episodes", {
      headers: new HttpHeaders()
    })
  }

  getAllEpisodesFromSerie(serieId: string){
    return this.http.get<Episode[]>(this.configurl + serieId + "episodes", {
      headers: new HttpHeaders()

    })
  }
}
