import { Component, OnInit } from '@angular/core';

//importar el servicio 
import {UsuarioService} from '../servicio/usuario.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  inLogin: boolean;
  name: string;
  email: string;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getInfoCuenta().subscribe(resultado => {
      if (resultado) {
        this.inLogin = true;
        this.name = resultado.displayName;
        this.email = resultado.email;
      } else {
        this.inLogin = false;
      }
    });
  }

  Salir() {
    console.log('salir');
    this.usuarioService.logout();
  }

}
