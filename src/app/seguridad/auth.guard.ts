import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable, from } from 'rxjs';

//importar el servicio
import {UsuarioService} from '../servicio/usuario.service';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private usuarioService: UsuarioService, private router: Router, angularFire: AngularFireAuth){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.usuarioService.getInfoCuenta().subscribe(resultado => {
      if (!resultado) {
        this.router.navigate(['/login']);
        return false;
      }
    });
    return true;
  }
}
