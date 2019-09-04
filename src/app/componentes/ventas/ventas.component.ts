import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Indicador  } from '../../modelos/indicador/indicador';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { IndicadorServicio } from '../../servicios/indicador-servicios';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  providers: [IndicadorServicio, UsuarioServicio],
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  //public i1;
  public indicadores: Indicador [];
  public procesos: []
  public identity;
  public proceso;
  public validador: boolean
  constructor(
    private _IndicadorServicio: IndicadorServicio,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos","Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos" ]
    this.validador = false
   }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
      if(this.identity){
        let fecha = new Date() 
        this.listado()
        /*
        if(fecha.getDate() <= 5){
          this.listado()
        }else{
          alert("Recuerda, solo puede ingresar información los primeros 5 días del mes")
          this._router.navigate(['/dashboard']);
        }
        */
      }else{
        alert('Debes iniciar sesión primero, pillo');
        this._router.navigate(['/login']);
      } 
  }

  operaciones(indicador): number{
    if(indicador.indi == "Cumplimiento de presupuesto")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;
  
    if(indicador.indi == "Apertura de municipios")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Apertura mensual de tiendas exclusivas")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Productos desarrollados vs plan")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Productos de competencia evaluados vs plan")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de actualización de especificaciones de materia prima")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de actualización de especificaciones de producto terminado")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de actualización de métodos de prueba de materia prima")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de actualización de métodos de prueba de producto terminado")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Revisión del 80 20 de las fórmulas")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de calibración y mantenimiento")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Reducir el 5 porciento del costo de la materia prima que representa el 80 20")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Mantener un máximo de 30 dias de inventario de MP")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Lograr el 98 porciento de exactitud en conteos ciclicos de 25 materias primas mensuales")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Lograr el 95 porciento de las ordenes de producción entregadas en menos de 2 horas")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Asegurar la producción acordada de 54,000 kg")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Lograr el 95 porciento de productos por encima del mínimo")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Lograr el 80 porciento de los productos sin ajuste")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Implementar 24 mejoras a procesos productivos actuales")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cero paros no programados")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Respuesta no mayor a 48 hrs a solicitudes de reclamación")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cero reclamaciones procedentes de materia prima y producto terminado")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Lograr el 98 porciento de exactitud en conteos ciclicos de 60 productos")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cero errores de surtido")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Asegurar el surtido de pedidos al 98 porciento en 24 horas")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "100 porciento de los pedidos entregados en las 24 hrs de haberse surtido")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Reducir el 5 porciento los gastos totales de distribución")
    indicador.resultado = indicador.parametro[0].recibe / indicador.parametro[1].recibe;

    if(indicador.indi == "Cumplimiento a programa de mantenimiento (unidades)")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplir el 100 porciento de las obligaciones presentadas en tiempo")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Entrega de estados financieros mensualmente a Dirección General")
    indicador.resultado = indicador.parametro[0].recibe;

    if(indicador.indi == "Días cartera no mayor a 45 días")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 30;
    
    if(indicador.indi == "Cartera vencida no mayor al 1 porciento")
    indicador.resultado = indicador.parametro[0].recibe;

    if(indicador.indi == "Avance de expedientes incluyendo pagares 100 porciento")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cierre de ticket en tiempo")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;
    
    if(indicador.indi == "Cumplimiento a programa de mantenimiento")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cero interrupciones de servicio no programadas"){
      if(indicador.parametro[0].ingresa <= 4)
      indicador.resultado = 100
      if(indicador.parametro[0].ingresa == 5)
      indicador.resultado = 80
      if(indicador.parametro[0].ingresa >= 6)
      indicador.resultado = 30
    }
    //indicador.resultado = indicador.parametro[0].recibe 
    // indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento de programa de proyectos de Dirección")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Grado de cumplimiento de requisitos legales aplicables")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;
    
    if(indicador.indi == "Índice de accidentes incapacitantes")
    indicador.resultado = (indicador.parametro[0].recibe * 100) * 365;
    
    if(indicador.indi == "Cumplimiento a programa de capacitación normativa")
    indicador.resultado = indicador.parametro[0].recibe / indicador.parametro[1].recibe;
    
    if(indicador.indi == "Cumplimiento a evaluaciones de la competencia")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Reducción del 10 porciento trimestral en indice de rotación de personal")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;

    if(indicador.indi == "Cumplimiento al programa de capacitación")
    indicador.resultado = (indicador.parametro[0].recibe / indicador.parametro[1].recibe) * 100;
    
    return indicador.resultado.toFixed(2);
  }
  
  onSubmit(indicadorForm){
    
    


    for(let indicador of this.indicadores){
      for(let para of indicador.parametro){
        if(para.recibe < -1 || para.recibe == null){
        this.validador = true
        //console.log(para)
        }
      }
    }
    if(this.validador){
      alert("Debes ingresar datos correctos")
     // indicadorForm.reset()
      this.validador = false
    }else{
      for(let indicador of this.indicadores){
      indicador.resultado =  this.operaciones(indicador);
      this.operaciones(indicador);
      indicador.tipo = null;

      let fecha = new Date()
      let mes: number
      let year: number
      mes = + fecha.getMonth()
      //mes++
      if(mes <= 9)
      mes = '0' + mes

      year = fecha.getFullYear()
      if(mes == 0){
        mes = '12'
        year = +fecha.getFullYear()
        year --
      }
      indicador.fecha = year + "-" + mes + "-" + "01"

      this._IndicadorServicio.guardaIndicador(indicador).subscribe(
        response => {         
        if(!response.indicadorStored){
        }else{
          alert("Indicador " +response.indicadorStored.indi+ " registrado con exito");
          this._router.navigate(['/dashboard']);
        }
        },
        error => {
          console.log(<any>error);
        }
        ); 
      }
    }
    
  }

  listado(){
    for (let pro of this.procesos){
      if(this.identity.role == pro)
      this.proceso = pro
    }
    this._IndicadorServicio.indicadores(this.identity.role).subscribe(
      response => {
        if(!response.indicadores){
        }else{
          this.indicadores = response.indicadores;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}//de la clase