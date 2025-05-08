import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  router = inject(Router)
  @Output() themeChange = new EventEmitter<string>();
  temaActual: string = 'cool';

  switch: boolean = false
  estado: string = 'cerrado'

  cambiarTema() {
    this.temaActual = this.temaActual === 'cool' ? 'dark' : 'cool';
    this.themeChange.emit(this.temaActual);
  }
  cerrarMenu() {
    this.switch = !this.switch
    if (this.switch === true) {
      this.estado = 'cerrado'
    }
    if (this.switch === false) {
      this.estado = 'abierto'
    }

  }
}




