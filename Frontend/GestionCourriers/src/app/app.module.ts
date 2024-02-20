import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CabinetListComponent } from './components/cabinet-list/cabinet-list.component';
import { CabinetAddComponent } from './components/cabinet-add/cabinet-add.component';
import { CabinetEditComponent } from './components/cabinet-edit/cabinet-edit.component';
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CabinetListComponent,
    CabinetAddComponent,
    CabinetEditComponent,
    DestCourrierComponent,
    SendCourrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
