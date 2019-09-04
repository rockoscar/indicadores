import { Component, OnInit, Input } from '@angular/core';
import { Indicador  } from '../../modelos/indicador/indicador';
import { Parametro  } from '../../modelos/parametro/parametro';
import { Rango  } from '../../modelos/indicador/rango';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-dash-hijo',
  templateUrl: './dash-hijo.component.html',
  providers: [IndicadorServicio],
  styleUrls: ['./dash-hijo.component.css']
})
export class DashHijoComponent implements OnInit {
  @Input() titulo
  @Input() fecha
  @Input() fechatermino
  public indicadores: Indicador
  public rango
  public indicador
  public parametro: Parametro
  public parametro2: Parametro

  constructor(
    private _IndicadorServicio: IndicadorServicio,
  ) {
    this.indicadores = []
    this.indicador = new Indicador()
    this.rango = new Rango ()
    this.parametro = new Parametro()
    this.parametro2 = new Parametro()
   }

  ngOnInit() {
    this._IndicadorServicio.dashboard(this.titulo).subscribe(
      response => {
        if(!response.indicadores){
          alert("No hay indiacadores")
        }else{              
          this.indicadores = response.indicadores
          this.indicador = response.indicadores[0]
          this.rango = response.indicadores[0].rango[0]
          this.parametro = response.indicadores[0].parametro[0]
          this.parametro2 = response.indicadores[0].parametro[1]
          console.log(this.indicadores)
        }
      },
      error => {
        console.log(<any>error);
      }            
    );
  }
}