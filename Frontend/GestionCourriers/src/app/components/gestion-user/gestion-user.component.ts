import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit{

  username = '';
  password = '';
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
    })
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
        },
        error => {
          console.log(error);
        });
  }
}
