/*
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {UserService} from "../services/user.service";
import {data} from "jquery";


export class UsernameValidatorValidators {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {

      return userService.getUserByUsername(control.value).subscribe(data=>{
      if(data) control.setErrors({'alreadyExist': true}) ;
      else return null;
    });
 /!*     return userService
        .getUserByUsername(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );*!/
    };
  }
}
*/
