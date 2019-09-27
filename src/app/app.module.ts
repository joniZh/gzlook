import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule, Route, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';

// importar servicio
import {UsuarioService} from './servicio/usuario.service';

// importar
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

// importar angularfire 
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';

// import para el guard
import {AuthGuard} from '../app/seguridad/auth.guard';

const Routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'privado', component: PrivatePageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonComponent,
    NavBarComponent,
    RegisterComponent,
    NotFoundPageComponent,
    PrivatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [UsuarioService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
