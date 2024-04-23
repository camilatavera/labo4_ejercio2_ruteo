import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidoComponent } from './componentes//bienvenido/bienvenido.component';
import { LoginComponent } from './componentes//login/login.component';
import { ErrorComponent } from './componentes//error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }