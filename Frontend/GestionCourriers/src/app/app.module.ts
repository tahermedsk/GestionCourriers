import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';
import { EnregistrementDestComponent } from './components/enregistrement-dest/enregistrement-dest.component';
import { OptionsComponent } from './components/options/options.component';
import { FormsModule } from '@angular/forms';
import { VentilationDestComponent } from './components/ventilation-dest/ventilation-dest.component';
import { ReponseDestComponent } from './components/reponse-dest/reponse-dest.component';
import { ArchivageDestComponent } from './components/archivage-dest/archivage-dest.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DestCourrierComponent,
    SendCourrierComponent,
    EnregistrementDestComponent,
    OptionsComponent,
    VentilationDestComponent,
    ReponseDestComponent,
    ArchivageDestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
