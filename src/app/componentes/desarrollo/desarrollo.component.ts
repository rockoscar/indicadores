import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  providers: [IndicadorServicio],
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

  constructor(
    private _IndicadorServicio: IndicadorServicio
  ) { 

  }

  ngOnInit() {
/*
    this._IndicadorServicio.indicadores().subscribe(
              //res del api
              response => {
                  //la respuesta del api manda conforme el nombre que se haya usado en el api
                  //en este caso se llamo usuario
                  //valida que exista el objeto y una propiedad del objeto en la res
                  if(!response.indicadores){
                  }else{
                    //this.formulas = response.formulas;
                    console.log('hola');
                      
                  }
              },
              error => {
                console.log(<any>error);
              }
    );
    */
  }
  
}

