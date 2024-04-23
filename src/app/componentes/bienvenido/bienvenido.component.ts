import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent implements OnInit {
  sesionIniciada: boolean = false;

  constructor(private router: Router) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    this.sesionIniciada = !!loggedInUser; 
  }
  
  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    this.sesionIniciada = !!loggedInUser;
  }

  cerrarSesion() {
    this.sesionIniciada = false;
    localStorage.removeItem('loggedInUser');

    if (!localStorage.getItem('loggedInUser')) {
      this.sesionIniciada = false;
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/error']);
    }
  }
}
