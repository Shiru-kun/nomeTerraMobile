import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SignupBean } from "../beans/signUpBean.model";
import { SignupService } from "../service/signup.service";
import {Plugins, PluginListenerHandle, NetworkStatus}  from '@capacitor/core'
import { ToastController } from '@ionic/angular';

const { Network } = Plugins;

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  signUpBean = new SignupBean();
  timerInternetChecker
  networkListener:PluginListenerHandle
  networkStatus:NetworkStatus
  internetStatus
  constructor(private signupService: SignupService,  private toastController:ToastController) {}

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


  signup(form: NgForm) {
    this.signUpBean.username = form.value.fusername;
    this.signUpBean.email = form.value.femail;
    this.signUpBean.pwd = form.value.fpassword;
    this.signupService.signup(this.signUpBean).subscribe((response) => {
      console.log(response);
    });
  }


}
