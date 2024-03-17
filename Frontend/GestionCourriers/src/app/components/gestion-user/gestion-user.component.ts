import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {Subject} from 'rxjs';

import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit{
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  username = '';
  password = '';
  allUsers: any = [];
  roles:any;
  user:{[key:string]: string}[]=[];
  formgroupe: FormGroup;

  constructor(private fb: FormBuilder,private apiService:ApiService) {
    this.formgroupe = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role:['',Validators.required]
    });
  }



  ngOnInit() {
    this.apiService.getRessource("/api/roles").subscribe((resp)=>{
      this.roles=resp;
      console.log(this.roles);
    });

    this.dtOptions = {
      searching:true,

      language:{
        searchPlaceholder:'rechercher'
      },
    };

    this.users();
  }



  onSubmit(formgroupe: FormGroup) {
    let email = this.formgroupe.get('username')?.value;
    let password=this.formgroupe.get('password')?.value;
    let role=this.formgroupe.get('role')?.value;
    this.user.pop();
    this.user.push({'username':email,'password':password,'role':role});
    console.log(this.user);
    this.apiService.createUser(this.user,'/users').subscribe(res=> {
          console.log(res);
          window.location.reload();
        }
        ,
        error => {
          console.log(error);
        });

  }


  users(){
    this.apiService.getRessource("/api/users").subscribe((res)=>{
      this.allUsers=res;
      this.dtTrigger.next(null);
    });
  }

  deletUser(user: any) {
    window.alert(`tu veux vraiment supprimer l'utilisateur ${user.username}`);
    this.apiService.deleteById("/api/users/"+user.id).subscribe((res)=>{
      console.log(res);
    });
    window.location.reload();
  }

  resetPassword(user: any) {
    this.apiService.resetPassword("/api/users/resetpassword",user.id).subscribe((res)=>{
      console.log(res);
    });
  }
}
