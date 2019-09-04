import { Injectable } from'@angular/core';

//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operators';
import { Observable } from'rxjs/Observable';
//para la url
import { GLOBAL } from './global';

//import { Formula } from '../models/formula/formula';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

//usamos la propiedad para inyectar datos
@Injectable()
//clase a exportar
export class UsuarioServicio{
    public url: string;
    public identity;
    public token;
    
    //es de un servicio
    constructor(private _http: Http){
        //con la url que viene de global
        this.url=GLOBAL.url;
    }

signup(user_to_login, gettoken = null){
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }
        let params = JSON.stringify(user_to_login);
        let headers = new Headers ({ 'Content-Type': 'application/json'});

        return this._http.post(this.url+'api/login', params, {headers: headers})
                .map(res => res.json());
    }

getToken(){
        //crea variable y guarda el local sencillo por que es un string
        
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;

    }

getIdentity(){
        //crea la variable y guarda lo que encuentre en el local, convirtiendolo en un json usable
        let identity = JSON.parse(localStorage.getItem('identity'));
        //si no esta vacio lo guarda
        if(identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }

updateUser(user_to_update){
          //crea la variable y carga el obejto que recibe
          let params = JSON.stringify(user_to_update);
          //crea el arreglo de los encabezados
          let headers = new Headers ({
              'Content-Type': 'application/json',
              //se manda la cabecera el token en la etiqueta que requiere la api
              'Authorization': this.getToken()
          });
          //manda la url con los datos requeridos por la api
          return this._http.put(this.url+'api/actualiza-usuario/'+user_to_update._id, params, {headers: headers})
                  //la respuesta la devuelve 
                  .map(res => res.json());
      }

  registro(user_to_login){
        let params = JSON.stringify(user_to_login);
        let headers = new Headers ({ 'Content-Type': 'application/json'});
        return this._http.post(this.url+'api/registro', params, {headers: headers})
                .map(res => res.json());
  }

  usuarios(){
    return this._http.get(this.url+'api/usuarios' ).map(res => res.json());
  }

  //obten usuario por ID
  usuarioId(id){     
    return this._http.get(this.url+'api/usuario/' + id).map(res => res.json());                          
  }
  //actualñiza contraseña
  updatePass(user){       
    let params = JSON.stringify(user);       
    let headers = new Headers ({
        'Content-Type': 'application/json',          
        'Authorization': this.getToken()
    });       
    return this._http.put(this.url+'api/actualiza-pass/'+user._id, params, {headers: headers}).map(res => res.json());                              
  }

}//de la clase