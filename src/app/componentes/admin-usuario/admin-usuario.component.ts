import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { User } from '../../modelos/usuario/usuario';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  providers: [UsuarioServicio],
  styleUrls: ['./admin-usuario.component.css']
})
export class AdminUsuarioComponent implements OnInit {
  public Fecha;
  public usuarios: User;
  public Hora;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.usuarios = [new User()]
   }

  ngOnInit() {
   this.listado()
  }
  //obten fecha y hora para agregar indicadores
  fecha() {
  let fechaActual = new Date();
  let dia = fechaActual.getDate().toString();
  let mes = (fechaActual.getMonth() + 1).toString();
  let anio = fechaActual.getFullYear().toString();
  let hora = fechaActual.getHours().toString();
  let minutos = fechaActual.getMinutes().toString();
  let segundos = fechaActual.getSeconds().toString();
  this.Fecha = anio + "-" + mes + "-" + dia;
  this.Hora = hora + ":" + minutos + ":" + segundos;
  console.log(this.Fecha)
   console.log(this.Hora)
  }

  //etiqueta usuario para que ya no sea funcional
  borraUsuario(usuario){
    $('#elimina-'+usuario._id).modal("hide");
    usuario.role = "eliminado"
    //console.log(indicador)
    this._userService.updateUser(usuario).subscribe(
      response =>{
        if(!response.usuario){
          alert('Error en el servidor sin respuesta')
        }
        this.listado()
      },
      error =>{
        alert('Error en el servidor')
      }
    );
  }

  listado(){
    this._userService.usuarios().subscribe(
      response => {
        if(!response.usuarios){
          alert("No hay indiacadores")
        }else{          
          this.usuarios = response.usuarios         
        }
      },
      error => {
        console.log(<any>error);
      }            
    );
  }
  
}//es de la clase