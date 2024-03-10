import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private authService:AuthService) { }
  Usernav:any='admin';
  rolesUser:any;
  ngOnInit(): void {}


  logout(){
    this.authService.logout();
  }

  isLoginPage() {
    return this.router.url === '/login';
  }

}
