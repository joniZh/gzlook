import { Component, OnInit } from '@angular/core';
//importamos el servicio
import {UsuarioService} from '../servicio/usuario.service';
import {Router, Route} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;

  constructor(private usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitRegister() {
    this.usuarioService.registrarUsuario(this.email, this.password)
    .then((resultado) => {
      this.router.navigate(['/privado']);
    });
  }

  loginGoogle() {
    this.usuarioService.loginGoogle().then(resultado => {
      this.router.navigate(['/privado']);
      console.log('Successfully logged in!');
    }).catch(error => {
      this.router.navigate(['/login']);
      console.log("errror de autentition "+error);
    });
  }

}
