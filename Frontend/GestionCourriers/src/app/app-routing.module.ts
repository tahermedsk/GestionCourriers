import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login' , pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'dest',component:DestCourrierComponent , canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }},
  {path:'send',component:SendCourrierComponent , canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }},
  {path:"reset-password",component:ResetPasswordComponent, canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
