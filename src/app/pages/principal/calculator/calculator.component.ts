import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  ventas:number=0;
  costoHora:number =0;
  cantidadHora:number=0;
  totalHora:number=this.costoHora*this.cantidadHora;

  actividad:number=0;
  web:number=0;
  herramientas:number=0;
  publicidad:number=0;
  total:number=0;
  totalUnidad:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  calcular():void{
    if(this.cantidadHora && this.costoHora && this.ventas){
      this.totalHora = this.cantidadHora*this.costoHora;
      this.total = this.totalHora + this.actividad + this.web+ this.herramientas+ this.publicidad;
      this.totalUnidad = this.total/this.ventas;
    }
   

  }

}
