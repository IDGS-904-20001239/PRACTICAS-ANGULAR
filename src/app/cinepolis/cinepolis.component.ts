import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  numPersonas !: number;
  numBoletos !: number;
  tarjeta: string = '';
  Total: number = 0;
  max !:number;
  resp :string ='';
  subTotal !: number;

  calcularBoleto() {
    this.max=(7*this.numPersonas);
    if (this.numBoletos > this.max){
    this.resp="No se pueden comprar más de 7 boletos por persona";
    this.Total=0;
    }
    else{
      this.subTotal = this.numBoletos * 12;
      this.resp = "";
      
      if (this.numBoletos > 5) {
        this.Total = this.subTotal * 0.85;
      } else if (this.numBoletos >= 3) {
        this.Total = this.subTotal * 0.90;
      } else {
        this.Total = this.subTotal;
      }
      
      if (this.tarjeta == "si") {
        this.Total = this.Total * 0.90;
      }
      
      this.Total = this.Total;
    } 
}
}
