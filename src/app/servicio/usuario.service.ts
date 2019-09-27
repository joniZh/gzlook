import { Injectable } from '@angular/core';
//
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

// 
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public auth: AngularFireAuth) { }


  // hace la autenticacion
  logout() {
    return this.auth.auth.signOut();
  }

  // login con google
  loginGoogle() {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  // registro con un email
  registrarUsuario(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
  }

  // informacion del estado si esta logeado 
  getInfoCuenta(){
    return this.auth.authState.pipe(map(auth => auth));
  }

  // verificar el login si esta registrado 
LoginUsuario(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(resultado => {
        resolve(resultado);
      }, error => {
        reject(error);
      });
    });
  }

}

