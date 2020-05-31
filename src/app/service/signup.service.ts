import { Injectable } from "@angular/core";
import { SignupBean } from "../beans/signUpBean.model";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { LoginBean } from '../beans/loginbean.model';
import { Player } from '../beans/player.model';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

let apiBaseUrl = "";
@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(private http: HttpClient) {
    apiBaseUrl = "http://localhost:8080";
    httpOptions.headers.append("Access-Control-Allow-Origin", apiBaseUrl);
  }

  signup(bean: SignupBean) {
    let url =apiBaseUrl.concat("/api/signup");
    return this.http.post(url, bean, httpOptions);
  }
  signin(bean: LoginBean) {
    let url =apiBaseUrl.concat("/api/signin");
    return this.http.post<Player>(url, bean, httpOptions);
  }

  getOneById(id) {
    let url =apiBaseUrl.concat(`/api/player/${id}`);
    return this.http.get<Player>(url, httpOptions);
  }



}
