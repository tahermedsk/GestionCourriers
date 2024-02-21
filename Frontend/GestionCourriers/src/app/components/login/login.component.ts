import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user?: User;
  username = '';
  password = '';
  showErr = false;
  roles: any = [];
  constructor(private authService:AuthService,
              private router:Router
              ){ }
  formGroup: FormGroup= new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  ngOnInit():void {
  }
  loginProcess(form: NgForm){
    console.log(this.password);
      const user = this.username.split("@")[0];
      this.authService.login(user, this.password)
        .subscribe({
        next : (res) => {
            const userInfo = this.authService.decodeToken(res);
            this.roles=userInfo.roles;
            localStorage.setItem('roles',this.roles[0])
            localStorage.setItem('username',user)
            if(this.password === '1234')
              this.router.navigate(['reset-password']);
            else{
              // this.username = user;
              this.router.navigate(['dest']);
            }
          },
        error : (err) => {
          console.log(err);
          this.showErr = true;
        }
      })
    }

}
