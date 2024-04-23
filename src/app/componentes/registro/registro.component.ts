import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-registro',
  // standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  nombre: string = '';
  clave: string = '';
  sesionIniciada: boolean = false;
  userExists: boolean = false; 

  constructor() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const { nombre, clave } = JSON.parse(loggedInUser);
      const usuarioEncontrado = localStorage.getItem(nombre);

      if (usuarioEncontrado && (JSON.parse(usuarioEncontrado) as Usuario).clave === clave) {
        this.sesionIniciada = true;
        this.nombre = nombre;
      }
    }
  }

  iniciarSesion() {
    const usuario = new Usuario(this.nombre, this.clave);

    if (localStorage.getItem(this.nombre)) {
      this.userExists = true;
      console.error('El usuario ya existe. No se puede registrar nuevamente');
    } else {
      this.userExists = false;
      localStorage.setItem(this.nombre, JSON.stringify(usuario));
      localStorage.setItem('loggedInUser', JSON.stringify({ nombre: this.nombre, clave: this.clave }));
      console.log(`Usuario registrado con el nombre ${this.nombre}`);
      this.sesionIniciada = true;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('loggedInUser');

    if (!localStorage.getItem('loggedInUser')) {
      this.sesionIniciada = false;
      console.log(`Cierre de sesión del usuario ${this.nombre}`);
    } else {
      console.error('Error al cerrar sesión');
    }
  }
}