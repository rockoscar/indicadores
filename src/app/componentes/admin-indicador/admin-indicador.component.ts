import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Indicador  } from '../../modelos/indicador/indicador';
import { IndicadorServicio } from '../../servicios/indicador-servicios';
import { UsuarioServicio } from '../../servicios/usuario-servicios';


@Component({
  selector: 'app-admin-indicador',
  templateUrl: './admin-indicador.component.html',
  providers: [IndicadorServicio, UsuarioServicio],
  styleUrls: ['./admin-indicador.component.css']
})
export class AdminIndicadorComponent implements OnInit {

  indicadores: Indicador [] = []
  //public indicadores: Indicador
  public identity
  prueba: Indicador []
  tipo: boolean
  procesos: []
  constructor(
    private _IndicadorServicio: IndicadorServicio,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
   this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos y Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos" ]
   }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
      if(this.identity){
        this.listaIndi()
      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }
  }
  ngDoCheck(){
    //console.log(this.tipo)
  }

  borraIndicador(indicador){
    $('#elimina-'+indicador._id).modal("hide");
    indicador.tipo = "eliminado"
    //console.log(indicador)
    this._IndicadorServicio.eliminaIndicador(indicador).subscribe(
      response =>{
        if(!response.indicadorActualizado){
          alert('Error en el servidor')
        }
        this.listaIndi()
      },
      error =>{
        alert('Error en el servidor')
      }
    );
  }

  listaIndi(){
    this._IndicadorServicio.listaIndi().subscribe(
      response => {
        if(!response.indicadores){
          alert("No hay indiacadores")
        }else{ 
          /*
          setTimeout(() => {
          
    }, 1500)
    */              
          this.indicadores = response.indicadores
          //console.log(this.indicadores)
          
         
          
        }
      },
      error => {
        console.log(<any>error);
      }            
    );
      
  }

}


