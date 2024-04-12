import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthGuard } from './services/auth.guard';
import {GestionUserComponent} from "./components/gestion-user/gestion-user.component";
import { ListCourrierComponent } from './components/list-courrier/list-courrier.component';
import { JointFileComponent } from './components/joint-file/joint-file.component';

const routes: Routes = [
  {path:'',redirectTo:'/login' , pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'test',component:JointFileComponent} ,
  {path:'list',component:ListCourrierComponent},
  {path:'dest',component:DestCourrierComponent , canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }},
  {path:'send',component:SendCourrierComponent , canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }},
  {path:"reset-password",component:ResetPasswordComponent, canActivate: [AuthGuard], data: { allowedRoles: ['ADMIN','USERBD'] }},
  {path:"gestionuser",component:GestionUserComponent ,canActivate:[AuthGuard],data:{allowedRoles: ['ADMIN']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
