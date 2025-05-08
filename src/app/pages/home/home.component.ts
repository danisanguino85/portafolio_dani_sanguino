import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  inicio: string = ''
  ngOnInit() {

    setTimeout(() => {
      this.inicio = 'inicio';
    }, 1000
    )
  }

}