import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Calculator';

  numero1:number = 0;
  numero2:number = 0;
  result: number = 0;

  sumar():void{ // Method no return value
    this.result = this.numero1 + this.numero2;
  }

  restar():void{
    this.result = this.numero1 - this.numero2;
  }

  multiplicar():void{
    this.result = this.numero1 * this.numero2;
  }

  dividir():void{
    this.result = this.numero1 / this.numero2;
    
  }
}
