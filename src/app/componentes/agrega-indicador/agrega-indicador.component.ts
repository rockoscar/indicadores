import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Rango  } from '../../modelos/indicador/rango';
import { Indicador  } from '../../modelos/indicador/indicador';
import { Parametro  } from '../../modelos/parametro/parametro';
import { IndicadorServicio } from '../../servicios/indicador-servicios';
import { UsuarioServicio } from '../../servicios/usuario-servicios';


@Component({
  selector: 'app-agrega-indicador',
  templateUrl: './agrega-indicador.component.html',
  providers: [IndicadorServicio],
  styleUrls: ['./agrega-indicador.component.css']
})
export class AgregaIndicadorComponent implements OnInit {
  public titulo: String
  public indicador: Indicador
  public parametro: Parametro
  public parametros: Parametro
  public rango: Rango

  public alerta: String
  public advertencia: String
  public exitoso: String
  public unidad: String
  public identity
  public procesos: [];
  
  constructor(
    private _IndicadorServicio: IndicadorServicio,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.titulo = 'Indicador';   
    this.indicador = new Indicador();
    this.parametro = new Parametro();
    this.parametros = [];
    this.rango = new Rango();

    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos y Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos" ]
   }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
      if(!this.identity){
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      }
  }

  onSubmit(){
    
    
    
    
    
  }

  guardaIndi(){
    this.indicador.parametro = this.parametros;
    this.indicador.rango = this.rango;
    //console.log(this.indicador);

    this._IndicadorServicio.guardaIndicadorMuestra(this.indicador).subscribe(
              //res del api
              response => {
                  
                  if(!response.indicadorStored){
                  }else{
                    //this.indicadores = response.indicadorStored;
                    //console.log(response.indicadorStored);
                    alert("Indicador " +response.indicadorStored.indi+ " guardado con exito");
                    this._router.navigate(['/ventas']);
                    //console.log(this.indicadores);
                  }
              },
              error => {
                console.log(<any>error);
              }
    );

  }

  parame(){
   this.parametros.push(this.parametro);
   //console.log(this.parametros);
  this.parametro = new Parametro();
  }

}