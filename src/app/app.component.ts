import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  theme: string = 'cool';



  // Este método se llama desde el hijo cuando cambia el tema
  onThemeChange(nuevoTema: string) {
    this.theme = nuevoTema;

  }
}




