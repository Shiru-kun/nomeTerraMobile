import { Component, OnInit } from "@angular/core";
import { Player } from "../beans/player.model";
import { StorageService } from "../service/storage.service";
import { HomeService } from "../service/home.service";
import { Router } from '@angular/router';
import { GameService } from '../service/game.service';
import { Game } from '../beans/gameBean.model';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  player: Player;
  players: Player[];
  username
  points
  photoUrl
  private timer:any;

  playerStatus
  constructor(
    private storage: StorageService,
    private homeService: HomeService,
    private gameService:GameService,
    private route:Router
  ) {}

   ngOnInit() {
    
    this.storage.get("username").then((username) => {
      this.username = username;
    });

    this.storage.get("playerStatus").then((playerStatus) => {
      this.playerStatus = playerStatus;
    });
    this.storage.get("points").then((points) => {
      this.points = points;
    });
     this.storage.get("photo").then((photoUrl) => {
     this.photoUrl = photoUrl;
     });

     this.storage.get("id").then(id=>{
       
       this.homeService.getAllPlayers().subscribe((response) => {
        const _players:Player[] = response;
          let playeid;
         
          this.players = _players.filter((_player)=>{
              return _player.id!=id
          
          
          })
      
        });
     })
   
     this.timer = setInterval(()=>{
      this.storage.get("id").then((id) => {
      
        this.gameService.iWasChallenged(id).subscribe(response=>{
           let game:Game= response 
          if(response!==null){
              console.log(response)
         
              this.route.navigateByUrl("/game")
              
              
            }
              

        })
      });


    },5000);

     
  }

  goOnline(){
 this.storage.get("id").then(id => {
 
  this.homeService.goOnline(id).subscribe(response=>{


    if(response){

      this.storage.get("playerStatus").then((playerStatus) => {
        if(playerStatus==="Online"){
          this.storage.set("playerStatus", "Offline")
         this.playerStatus = "Offline"
        }else{
          this.storage.set("playerStatus", "Online")
          this.playerStatus = "Online"

        }
      });

    }
    
        })      


  })
}

challenge(playerId){

console.log(playerId);

this.storage.set("challengedId", playerId)
this.route.navigateByUrl("/setgame")
}

}
