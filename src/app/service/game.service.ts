import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Player } from '../beans/player.model';
import { Game} from '../beans/gameBean.model';
import { Question } from '../beans/question.model';
import { AnswerBean } from '../beans/answer.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

let apiBaseUrl = "";
@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {
    apiBaseUrl = "http://localhost:8080";
    httpOptions.headers.append("Access-Control-Allow-Origin", apiBaseUrl);
  }


setGame(bean:Game){
    let url =apiBaseUrl.concat(`/api/setGame/`);
    return this.http.post(url,bean,httpOptions);

  }
  getGame(id){
    let url =apiBaseUrl.concat(`/api/getGame/${id}`);
    return this.http.get<Game>(url,httpOptions);

  }

  getGameQuestions(){
    let url =apiBaseUrl.concat(`/api/questions`);
    return this.http.get<Question[]>(url,httpOptions);

  }
  
 saveAns(ans:AnswerBean){
    let url =apiBaseUrl.concat(`/api/answer`);
    return this.http.post(url,ans,httpOptions);

 
  }


  isWinner(gameId, playerId){
    let url =apiBaseUrl.concat(`/api/isWinner/${gameId}/${playerId}`);
    return this.http.get(url,httpOptions);
}



  iWasChallenged(playerId){
    let url =apiBaseUrl.concat(`/api/getChallengedGame/${playerId}`);
    return this.http.get<Game>(url,httpOptions);

  }
}
