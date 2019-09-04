import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from '../../servicios/usuario-servicios';
import { User } from '../../modelos/usuario/usuario';

@Component({
  selector: 'app-agrega-usuario',
  templateUrl: './agrega-usuario.component.html',
  providers: [UsuarioServicio],
  styleUrls: ['./agrega-usuario.component.css']
})
export class AgregaUsuarioComponent implements OnInit {
  public titulo;
  public usuario: User;
  public procesos: [];
  public cpass;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.titulo = "Usuario nuevo"
    this.usuario = new User()
    this.procesos =   ["Ventas", "Desarrollo","Compras","Almacén de materia prima","Producción","Ingeniería de procesos y Mantenimiento","Control de calidad",
            "Almacén de producto terminado", "Embarques","Contabilidad","Crédito y cobranza","Tecnología de la información","Seguridad, Higiene y Medio Ambiente",
            "Recursos humanos", "Admin", "Direccion" ]
   }

  ngOnInit() {
  }

  onSubmit(){
    if(this.usuario.password != this.cpass){
      alert("La contraseña no coincide")
      this.usuario.password = ""
      this.cpass = ""
    }else{
      this._userService.registro(this.usuario).subscribe(
        		response =>{
        			if(!response.usuario){
        				alert("error 1")
        			}else{
                alert("Usuario resgitrado con exito")
                this._router.navigate(['/admin-usuarios']);
        			}
        		},
        		error => {
        			var errorMensaje = <any>error;
        			if(errorMensaje != null){
        			}
        		}
        	);
    }
    
  }

}//es de la clase