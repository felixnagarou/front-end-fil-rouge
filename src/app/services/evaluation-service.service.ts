import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Evaluation} from "../models/Evaluation";

@Injectable({
  providedIn: 'root'
})
export class EvaluationServiceService {

  constructor(private http:HttpClient) {

  }
  configUrl:string = "assets/config.json"


  getAllEvaluationFromMovie(movieId:string){
    return this.http.get<Evaluation[]>(this.configUrl + movieId + "evaluations", {
      headers: new HttpHeaders()
    })
  }

  addEvaluationToMovie(evaluation:Evaluation){
    return this.http.post<Evaluation>(this.configUrl, evaluation, {
      headers: new HttpHeaders()
    } )
  }

  deleteEvaluation(evaluationId:string){
    return this.http.delete<Evaluation>(this.configUrl + evaluationId, {
      headers: new  HttpHeaders()
    })
  }

  editEvaluation(editedEvaluation:Evaluation){
    return this.http.patch<Evaluation>(this.configUrl, editedEvaluation, {
      headers: new HttpHeaders()
    })
  }
}
