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
  ngOnInit(): void {
    const userInfo = this.authService.decodeToken(localStorage.getItem('access_token')||'');
    this.rolesUser=userInfo.roles;
    if(this.rolesUser.includes('ADMINISTRATEUR')){
      this.Usernav = 'admin';
      this.router.navigate(['/entreprise']);
    }
    if(this.rolesUser.includes('ETUDIANT')){
      this.Usernav = 'etudiant';
      this.router.navigate(['/choix']);
    }
    if(this.rolesUser.includes('CHEF_DEPARTEMENT')){
      this.Usernav = 'chef_departement';
      this.router.navigate(['/chef-dept']);
    }
  }

  isLoginPage() {
    return this.router.url === '/login';
  }

  gotoEntreprise() {
    this.router.navigate(['/entreprise']);
  }
  gotoChoix() {
    this.router.navigate(['/entreprise']);
  }
  gotoEtudiant() {
    this.router.navigate(['/etudiant']);
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  gotoLogout() {
    this.router.navigate(['/logout']);
  }
  gotoBilan(){
    this.router.navigate(['/bilan']);
  }
  gotoStatistique(){
    this.router.navigate(['/statistiques']);
  }
  gotoProfile(){
    this.router.navigate(['/profile']);
  }
  gotoHome(){
    this.router.navigate(['/home']);
  }
  gotoChefDept(){
    this.router.navigate(['/chef-dept']);
  }
  gotoResePassword(){
    this.logout();
    this.router.navigate(['/login']);
  }
  logout(){
    this.authService.logout();
  }

  isResetPage() {
    return this.router.url === '/reset-password';
  }
}
