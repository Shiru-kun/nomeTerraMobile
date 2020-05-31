import { Component, OnInit } from "@angular/core";
import { GameService } from "../service/game.service";
import { StorageService } from "../service/storage.service";
import { Game } from "../beans/gameBean.model";
import { SignupService } from "../service/signup.service";
import { Player } from "../beans/player.model";
import { Question } from "../beans/question.model";
import { AnswerBean } from "../beans/answer.model";

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
  constructor(
    private gameService: GameService,
    private storage: StorageService,
    private signService: SignupService
  ) {}

  ngOnInit() {
    this.storage.get("id").then((id) => {
      this.gameService.getGame(id).subscribe((response) => {
        this.game = response;

        this.signService
          .getOneById(this.game.challengedId)
          .subscribe((player) => {
            this.opponent = player;
            this.challengedName = this.opponent.username;
          });
      });
    });

    this.storage.get("username").then((username) => {
      this.challengerName = username;
    });
    this.gameService.getGameQuestions().subscribe((_questions) => {
      this.questions = _questions;
    });
  }

  answered(questionId) {
    this.storage.get("id").then((id) => {
      console.log("user"+id)
      this.ansBean.playerId = id;
    });
    console.log(this.game.id);
    console.log(questionId);
    this.questions = this.questions.filter(
      (question) => question.id !== questionId
    );

    this.ansBean.answer = this.answer;
  
    this.ansBean.gameId = this.game.id;
    this.ansBean.questionId = questionId;
    this.gameService.saveAns(this.ansBean).subscribe((response) => {
      console.log(response);
    });
  }
}
