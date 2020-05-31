import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SignupBean } from "../beans/signUpBean.model";
import { SignupService } from "../service/signup.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  signUpBean = new SignupBean();
  constructor(private signupService: SignupService) {}

  ngOnInit() {}

  signup(form: NgForm) {
    this.signUpBean.username = form.value.fusername;
    this.signUpBean.email = form.value.femail;
    this.signUpBean.pwd = form.value.fpassword;
    this.signupService.signup(this.signUpBean).subscribe((response) => {
      console.log(response);
    });
  }


}
