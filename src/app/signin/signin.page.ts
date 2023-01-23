import { Component, OnInit } from '@angular/core';
import { LoginBean } from '../beans/loginbean.model';
import { SignupService } from '../service/signup.service';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Player } from '../beans/player.model';
import { StorageService } from '../service/storage.service';
import {Plugins, PluginListenerHandle, NetworkStatus}  from '@capacitor/core'
import { ToastController } from '@ionic/angular';

const { Network } = Plugins;

@Component({

  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  loginBean= new LoginBean
  player:Player
  timerInternetChecker
  networkListener:PluginListenerHandle
  networkStatus:NetworkStatus
  internetStatus
  constructor(private signupService:SignupService, private router:Router, private storage:StorageService,
    private toastController:ToastController) { }
 

    ionViewDidEnter() {

      this.timerInternetChecker = setInterval(()=>{

        this.networkListener = Network.addListener('networkStatusChange', status=>{
          
              this.networkStatus =status
           
              console.log("value of "+ this.networkStatus.connected);
              if(this.networkStatus.connected){
               

           this.toastController.create({message:"Conexao detectada", duration:2000, color:"success"}).then(present=>{
                 present.present();
                 this.internetStatus = false

           })
            
              }
              else{
               
               this.toastController.create({message:"Verifique a sua conexao",duration:2000, color:"warning"}).then(present=>{
                 present.present();
                 this.internetStatus = true

           })


              }


       })

  }
  ,1000)
      
    }
    
  ngOnInit() {
 
    Network.getStatus().then(status=>{
if(!status.connected){
  this.toastController.create({message:"Verifique a sua conexao",duration:2000, color:"warning"}).then(present=>{
    present.present();
    

})
this.internetStatus = true 
}else{
  
    this.internetStatus = false



}

    })
 
  }

  signin(form: NgForm) {
    this.loginBean.username = form.value.fusername;
    this.loginBean.pwd = form.value.fpassword;
 
    this.signupService.signin( this.loginBean).subscribe((response) => {
      console.log(response)
      this.player= response
      if(this.player.username!==null){
         this.storage.set("id", this.player.id)
         this.storage.set("username", this.player.username)
         this.storage.set("photo", this.player.photoUrl)
         this.storage.set("email", this.player.email)
         this.storage.set("points", this.player.points)
         this.storage.set("playerStatus", this.player.playerStatus)
         this.router.navigateByUrl("/home");

      }else;
    });
  }
}
