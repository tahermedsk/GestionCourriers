import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';

const routes: Routes = [
  {path:'',redirectTo:'/login' , pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'dest',component:DestCourrierComponent},
  {path:'send',component:SendCourrierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
