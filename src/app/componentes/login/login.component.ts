import { Component } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  nombre: string = '';
  clave: string = '';
  sesionIniciada: boolean = false;

  constructor(private router: Router) {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const { nombre, clave } = JSON.parse(loggedInUser);
      const usuarioEncontrado = localStorage.getItem(nombre);

      if (usuarioEncontrado && (JSON.parse(usuarioEncontrado) as Usuario).clave === clave) {
        this.sesionIniciada = true;
        this.nombre = nombre;
      }
    } else {
      // Verificar si el usuario predeterminado no está presente en localStorage
      const usuarioPredeterminado = localStorage.getItem('chaumail');
      if (!usuarioPredeterminado) {
        // Si el usuario predeterminado no está presente, agregarlo a localStorage
        localStorage.setItem('chaumail', JSON.stringify(new Usuario('chaumail', 'hola123')));
      }
    }
  }

  iniciarSesion() {
    const usuario: string | null = localStorage.getItem(this.nombre);

    if (usuario && (JSON.parse(usuario) as Usuario).clave === this.clave) {
      localStorage.setItem('loggedInUser', JSON.stringify({ nombre: this.nombre, clave: this.clave }));
      console.log(`Sesión iniciada como usuario ${this.nombre}`);
      this.sesionIniciada = true;
      this.router.navigate(['/bienvenido']);
    } else {
      this.router.navigate(['/error']);
      console.error("Usuario incorrecto");
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
