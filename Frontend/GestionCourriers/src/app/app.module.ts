import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DestCourrierComponent } from './components/dest-courrier/dest-courrier.component';
import { SendCourrierComponent } from './components/send-courrier/send-courrier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { EnregistrementDestComponent } from './components/enregistrement-dest/enregistrement-dest.component';
import { OptionsComponent } from './components/options/options.component';
import { VentilationDestComponent } from './components/ventilation-dest/ventilation-dest.component';
import { ReponseDestComponent } from './components/reponse-dest/reponse-dest.component';
import { ArchivageDestComponent } from './components/archivage-dest/archivage-dest.component';
import { EnregistrementSendComponent } from './components/enregistrement-send/enregistrement-send.component';
import { GestionUserComponent } from './components/gestion-user/gestion-user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//si vous rencontrez une erreur dans le package suivant
//vous devez maitre  'ng add angular-datatables'


//import {DataTablesModule} from 'angular-datatables';


import { ListCourrierComponent } from './components/list-courrier/list-courrier.component';
import { ListCourrierDepartComponent } from './components/list-courrier-depart/list-courrier-depart.component';
import { ListCourrierArriveComponent } from './components/list-courrier-arrive/list-courrier-arrive.component';
import { DataTablesModule } from 'angular-datatables';
import { JointFileComponent } from './components/joint-file/joint-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DestCourrierComponent,
    SendCourrierComponent,
    ResetPasswordComponent,
    EnregistrementDestComponent,
    OptionsComponent,
    VentilationDestComponent,
    ReponseDestComponent,
    ArchivageDestComponent,
    EnregistrementSendComponent,
    GestionUserComponent,
    ListCourrierComponent,
    ListCourrierDepartComponent,
    ListCourrierArriveComponent,
    JointFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,

    HttpClientModule,
    


    MatIconModule,
    MatProgressBarModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        }
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
