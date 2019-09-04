import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from '../../servicios/usuario-servicios';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  providers: [UsuarioServicio],
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  public titulo;
  public identity;
  public status;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UsuarioServicio
  ) {
    this.titulo = 'Mis datos';
   }

  ngOnInit() {
     //si ya esta logeado no manda a otra dirección
    this.identity = this._userService.getIdentity();
  
    if(!this.identity){
      this._router.navigate(['/login']);
    }
  }

  onSubmit(){
    this._userService.updateUser(this.identity).subscribe(
        		response =>{
        			if(!response.usuario){
        				this.status ='error';
        			}else{
        				//console.log(response.usuario);
        				//cargamos en local los datos del objeto, antes lo convertimos en un json
        				localStorage.setItem('identity', JSON.stringify(this.identity));
        				this.status='exitoso'
                this._router.navigate(['/mis-datos']);
        			}

        			//subida de image
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

