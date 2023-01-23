import { Component, OnInit } from "@angular/core";
import { SignupService } from "../service/signup.service";
import { StorageService } from "../service/storage.service";
import { Player } from "../beans/player.model";
import { NgForm } from "@angular/forms";
import { Game } from "../beans/gameBean.model";
import { GameService } from '../service/game.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-setgame",
  templateUrl: "./setgame.page.html",
  styleUrls: ["./setgame.page.scss"],
})
export class SetgamePage implements OnInit {
  challengedUsername = "Focas";
  player: Player;
  gameBean: Game = new Game();
  challengedId;
  constructor(
    private signService: SignupService,
    private storage: StorageService,
    private gameService:GameService, private route:Router
  ) {}

  ngOnInit() {
    this.storage.get("challengedId").then((id) => {
      this.signService.getOneById(id).subscribe((response) => {
        this.player = response;

        this.challengedUsername = this.player.username;
        this.challengedId = this.player.id;
      });
    });
  }

  setGame(form: NgForm) {
    this.gameBean.playTimes = form.value.frounds;
    this.gameBean.time = form.value.ftime;
    this.gameBean.level = form.value.flevel;
    this.gameBean.challengedId = this.challengedId;
     console.log(form.value.frounds)
    this.storage.get("id").then((id) => {
      this.gameBean.challengerId = id;
     
      this.gameService.setGame(this.gameBean).subscribe(response=>{

console.log(response)
if(response){
this.route.navigateByUrl("/game")

}

      })
    });


    
  }
}
