import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { Chart } from 'chart.js';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-graficador',
  templateUrl: './graficador.component.html',
  providers: [IndicadorServicio],
  styleUrls: ['./graficador.component.css']
})
export class GraficadorComponent implements OnInit {

  public fecha
  public meses
  constructor(
    private _IndicadorServicio: IndicadorServicio,
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   }

  ngOnInit() {
     this._IndicadorServicio.listaIndi().subscribe(
      response => {
        if(!response.indicadores){
          alert("No hay indiacadores")
        }else{   
          for(let indicador of response.indicadores){
            this.fecha = indicador.fecha
            var cadena2 = this.fecha.slice(5, -3)
            var mes = (cadena2 *1)
            if (mes == 5){
              console.log('mayo')
            }

            
            
          }
          
          
          
          
        }
      },
      error => {
        console.log(<any>error);
      }            
    );
  }

}