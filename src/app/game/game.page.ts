import { Component, OnInit } from "@angular/core";
import { GameService } from "../service/game.service";
import { StorageService } from "../service/storage.service";
import { Game } from "../beans/gameBean.model";
import { SignupService } from "../service/signup.service";
import { Player } from "../beans/player.model";
import { Question } from "../beans/question.model";
import { AnswerBean } from "../beans/answer.model";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"],
})
export class GamePage implements OnInit {
  game: Game;
  opponent: Player;
  challengedName;
  challengerName;
  questions: Question[];
  questionHidden;
  answer: string;
  ansBean = new AnswerBean();
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  private timer:any;
  constructor(
    private gameService: GameService,
    private storage: StorageService,
    private signService: SignupService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.storage.get("id").then((id) => {
      this.gameService.getGame(id).subscribe((response) => {
        this.game = response;

        this.signService.getOneById(this.game.challengedId).subscribe((player) => {
            this.opponent = player;
            this.challengedName = this.opponent.username;
            
          });
        this.signService.getOneById(this.game.challengerId).subscribe((player) => {
            this.opponent = player;
            this.challengerName = this.opponent.username;
            
          });
      
   
      
        });
    });

   
    this.gameService.getGameQuestions().subscribe((_questions) => {
      this.questions = _questions;
    });


  

  }

  async answered(questionId) {
    await this.storage.get("id").then((id) => {

      this.ansBean.playerId = id;
    });

    this.questions = this.questions.filter(
      (question) => question.id !== questionId

    );

    this.ansBean.answer = this.answer;

    this.ansBean.gameId = this.game.id;
    this.ansBean.questioId = questionId;
    this.gameService.saveAns(this.ansBean).subscribe((response) => {
      console.log(response);
    });


    if (this.questions.length == 0) {
      this.loadingController.create({

        message: 'Aguarde resultado da partida',
        
      }).then((value) => {
        value.present();

      })


      this.gameService.isWinner(this.ansBean.gameId, this.ansBean.playerId ).subscribe(response=>{
                       console.log(response)
               if(response) {
                 
                this.loadingController.dismiss();
                
                } 
      })

    }
  }
}
