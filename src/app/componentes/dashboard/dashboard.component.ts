import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IndicadorServicio } from '../../servicios/indicador-servicios';
import { Indicador  } from '../../modelos/indicador/indicador';
import { Rango  } from '../../modelos/indicador/rango';
import { UsuarioServicio } from '../../servicios/usuario-servicios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [IndicadorServicio, UsuarioServicio],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public procesos: []
  public pro
  public identity

  public titulosV :[]
  public titulosD :[]
  public titulosC :[]
  public titulosMP :[]
  public titulosP :[]
  public titulosIP :[]
  public titulosM :[]
  public titulosCC :[]
  public titulosPT :[]
  public titulosE :[]
  public titulosCN :[]
  public titulosCR :[]
  public titulosTI :[]
  public titulosSG :[]
  public titulosRH :[]

  

  constructor(
    private _IndicadorServicio: IndicadorServicio,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {

    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos y Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos" ]

    this.titulosV = ["Cumplimiento de presupuesto", "Apertura de municipios", "Apertura mensual de tiendas exclusivas"]

    this.titulosD = ["Productos desarrollados vs plan", "Productos de competencia evaluados vs plan", "Cumplimiento al programa de actualización de especificaciones de materia prima", "Cumplimiento al programa de actualización de especificaciones de producto terminado", "Cumplimiento al programa de actualización de métodos de prueba de materia prima", "Cumplimiento al programa de actualización de métodos de prueba de producto terminado", "Revisión del 80 20 de las fórmulas", "Cumplimiento al programa de calibración y mantenimiento"]

    this.titulosC = ["Reducir el 5 porciento del costo de la materia prima que representa el 80 20", "Mantener un máximo de 30 dias de inventario de MP"]

    this.titulosMP = ["Lograr el 98 porciento de exactitud en conteos ciclicos de 25 materias primas mensuales", "Lograr el 95 porciento de las ordenes de producción entregadas en menos de 2 horas"]

    this.titulosP = ["Asegurar la producción acordada de 54,000 kg", "Lograr el 95 porciento de productos por encima del mínimo", "Lograr el 80 porciento de los productos sin ajuste"]

    this.titulosIP = ["Implementar 24 mejoras a procesos productivos actuales","Cero paros no programados" ]

   // this.titulosM = []

    this.titulosCC = ["Respuesta no mayor a 48 hrs a solicitudes de reclamación", "Cero reclamaciones procedentes de materia prima y producto terminado"]

    this.titulosPT = ["Lograr el 98 porciento de exactitud en conteos ciclicos de 60 productos", "Cero errores de surtido", "Asegurar el surtido de pedidos al 98 porciento en 24 horas"]

    this.titulosE = ["100 porciento de los pedidos entregados en las 24 hrs de haberse surtido", "Reducir el 5 porciento los gastos totales de distribución", "Cumplimiento a programa de mantenimiento (unidades)"]

    this.titulosCN = ["Cumplir el 100 porciento de las obligaciones presentadas en tiempo", "Entrega de estados financieros mensualmente a Dirección General"]

    this.titulosCR = ["Días cartera no mayor a 45 días", "Cartera vencida no mayor al 1 porciento", "Avance de expedientes incluyendo pagares 100 porciento"]

    this.titulosTI = ["Cierre de ticket en tiempo", "Cumplimiento a programa de mantenimiento", "Cero interrupciones de servicio no programadas", "Cumplimiento de programa de proyectos de Dirección"]

    this.titulosSG = ["Grado de cumplimiento de requisitos legales aplicables", "Índice de accidentes incapacitantes", "Cumplimiento a programa de capacitación normativa"]

    this.titulosRH = ["Cumplimiento a evaluaciones de la competencia", "Reducción del 10 porciento trimestral en indice de rotación de personal", "Cumplimiento al programa de capacitación"]
    
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

  borraFiltros(){
    this.pro = null
    this.fecha = ""
    this.fechatermino = ""
  }

  contador(){
      
  }//de la funcion


}//es de la clase