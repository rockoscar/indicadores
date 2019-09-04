import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Indicador  } from '../../modelos/indicador/indicador';
import { Rango  } from '../../modelos/indicador/rango';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-dash-padre',
  templateUrl: './dash-padre.component.html',
  providers: [UsuarioServicio, IndicadorServicio],
  styleUrls: ['./dash-padre.component.css']
})
export class DashPadreComponent implements OnInit {
  public identity
  public pro
  public procesos: []
  public fecha
  public fechatermino

  public indiV01: String;
  public indicadoresV01: Indicador ;
  public rango: Rango;
  public indicador: Indicador;

  


  constructor(
    private _userService: UsuarioServicio,
    private _router: Router,
    private _IndicadorServicio: IndicadorServicio,
  ) {
    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos","Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos" ]
    this.indicadoresV01 = [];
    this.indicador = new Indicador();
    this.rango = new Rango ();
   }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
      if(this.identity){
        if(this.identity.role == 'Admin' || this.identity.role == 'Direccion'){
          this.contador()
        }else{
         this.pro = this.identity.role
        this.contador()
        }
      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      } 
  }

  contador(){
    this.indiV01 = "Cumplimiento de presupuesto";
    this._IndicadorServicio.dashboard(this.indiV01).subscribe(
      response => {
        if(!response.indicadores){
          alert("No hay indiacadores")
        }else{
          this.indicadoresV01 = response.indicadores
          this.indicador = response.indicadores[0]
          this.rango = response.indicadores[0].rango[0]
        }
      },
      error => {
        console.log(<any>error);
      }            
    );
    
  }

   borraFiltros(){
    this.pro = null
    this.fecha = ""
    this.fechatermino = ""
    //this.contador()

  }
}

