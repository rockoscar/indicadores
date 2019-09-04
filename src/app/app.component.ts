import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioServicio } from  './servicios/usuario-servicios';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [UsuarioServicio],
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  titulo = 'apoco';

  public identity;
   constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UsuarioServicio
    ){}

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  //para cada cambio en la app ejecuta el metodo
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  //para cerrar sesion
  logout(){
    //borra el local storage
    localStorage.clear();
    //borrar la variable 
    this.identity = null;
    //redirecciona al incio
    this._router.navigate(['/']);
  }
}
