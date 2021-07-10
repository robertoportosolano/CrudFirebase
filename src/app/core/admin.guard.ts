import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import firebase  from "firebase/app";
import 'firebase/auth';


import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
   constructor( public router:Router ){   }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) { 
          resolve(true);
        } else{
             console.log(' No se ha podido verificar la autenticidad del usuario');
             this.router.navigateByUrl('/login');
             resolve(false);
        }
     });
     
    });
  }
}
