import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Player } from '../beans/player.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

let apiBaseUrl = "";
@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {
    apiBaseUrl = "http://localhost:8080";
    httpOptions.headers.append("Access-Control-Allow-Origin", apiBaseUrl);
  }

getAllPlayers(){
 
    let url =apiBaseUrl.concat("/api/players")
    return this.http.get<Player[]>(url, httpOptions);
}
goOnline(id){
    let url =apiBaseUrl.concat(`/api/setStatus/${id}`);
    return this.http.get<Player>(url,httpOptions);

  }



  
}
