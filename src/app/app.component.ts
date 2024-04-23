import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 // standalone: true,   //esto hace que no haya que hacer modulos --> standalone: no tiene que estar declarada. tiene vida propia.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ejercicio entrega';
}