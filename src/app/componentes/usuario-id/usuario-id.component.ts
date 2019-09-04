import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { User } from '../../modelos/usuario/usuario';

@Component({
  selector: 'app-usuario-id',
  templateUrl: './usuario-id.component.html',
  providers: [UsuarioServicio],
  styleUrls: ['./usuario-id.component.css']
})
export class UsuarioIdComponent implements OnInit {
  public status
  public mensaje: string
  public validaPass: boolean
  public pass
  public pass2
  public cambiaPass: boolean
  public procesos: []
  public usuario: User
  public titulo
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.usuario = new User()
    this.titulo = 'Edita usuario'
    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos y Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos", "Admin", "Direccion" ]
    this.cambiaPass = false
    this.validaPass = false
   }

  ngOnInit() {
    this.indiId()
  }

  modifica(){
    this._userService.updateUser(this.usuario).subscribe(
    response => {
        if(!response.usuario){
          alert("No hay indicador")  
        }else{
          alert("Usuario actualizado")
          this._router.navigate(['/admin-usuarios']); 
        }
    },
    error =>{
      console.log(<any>error)
    }
    )  
  }

  indiId(){
    this._route.params.forEach((params: Params) => {
      let id =  params['id']
      this._userService.usuarioId(id).subscribe(
        response => {
        if(!response.usuario){
          alert("No hay indicador")  
        }else{
          this.usuario = response.usuario
        }
        },
        error =>{
          console.log(<any>error)
        }
      )
    });
  }

  pideCambio(){
    this.cambiaPass = true;
  }

  mandaCambio(passUpdate){
    if(!this.pass || !this.pass2 ){
      this.validaPass=true;
      passUpdate.reset();
      this.mensaje = "Debes llenar los dos campos";
    }else{
      if(this.pass != this.pass2){
      this.validaPass=true;
      passUpdate.reset();
      this.mensaje = "Las contraseñas no coincinden";
      }else{
        this.usuario.password = this.pass;
        this._userService.updatePass(this.usuario).subscribe(
        	response =>{
        		if(!response.usuario){
        			this.status ='error';
              console.log("primer");
        		}else{
        				this.status='exitoso'
                alert("Has actualizado la contraseña correctamente =)");
                this._router.navigate(['/admin-usuarios']);
        		  }
        	},
        	error => {
        		var errorMensaje = <any>error;  
        			if(errorMensaje != null){
        				this.status ='error'; 
        			}
        	}
        );
      }
    }      
  }

  

}