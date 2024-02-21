import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const allowedRoles = route.data['allowedRoles'] as string[];
    const currentUser = this.authService.decodeToken(localStorage.getItem('access_token')||'');
    if (currentUser && allowedRoles.some(role => currentUser.roles.includes(role))) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
