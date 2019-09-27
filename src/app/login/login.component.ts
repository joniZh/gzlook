import { Component, OnInit } from '@angular/core';
//importamos el servicio
import {UsuarioService} from '../servicio/usuario.service';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(private usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitlogin() {
    this.usuarioService.LoginUsuario(this.email, this.password)
    .then((resultado) => {
      this.router.navigate(['/privado']);
    }).catch((error) => {
      console.log('error of authetication' + error);
      this.router.navigate(['/login']);
    });
  }

  loginGoogle() {
    this.usuarioService.loginGoogle().then(resultado => {
      this.router.navigate(['/privado']);
      console.log('Successfully logged in!');
    }).catch(error => {
      this.router.navigate(['/login']);
      console.log(error);
    });
  }
  
  loginFacebook() {
    console.log('faebook');
  }

}
