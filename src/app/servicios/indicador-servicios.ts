import { Injectable } from'@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from'rxjs/Observable';
import { GLOBAL } from './global';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Indicador  } from '../modelos/indicador/indicador';


@Injectable()
export class IndicadorServicio{
    public url: string;
    constructor(
      private _http: Http,
     
      ){
      this.url=GLOBAL.url;
    }
  //obten indicadores muestra por proceso
  indicadores(proceso){
    return this._http.get(this.url+'indicadoresM-m/'+proceso).map(res => res.json());
  }
  //guarda indicador
  guardaIndicador(indicador_guardar){
    let params = JSON.stringify(indicador_guardar);
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'indicador-guarda', params, {headers: headers}).map(res => res.json());               
  }
  //guarda indicador muestra
  guardaIndicadorMuestra(indicador_guardar){
    let params = JSON.stringify(indicador_guardar);
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.url+'indicadorM-g', params, {headers: headers}).map(res => res.json());
  }
  //obten indicadores solo con registros, por proceso
  dashboard(indicador){  
    return this._http.get(this.url+'dashboard/'+ indicador).map(res => res.json());                          
  }
  //obten todos los indicadores
  listaIndi(){     
    return this._http.get(this.url+'lista-indi').map(res => res.json());                          
  }
  //obten indicador por ID
  indiId(id){     
    return this._http.get<Indicador[]>(this.url+'indicador/' + id).map(res => res.json());                          
  }
  //actualiza indicador por ID
  actualizaIndicador(cambio){  
    let params = JSON.stringify(cambio);  
    let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            //'Authorization': this.getToken()
        });
    return this._http.put(this.url+'actualiza-indicador/'+ cambio._id, params, {headers: headers}).map(res => res.json());                          
  }

  //elimina indicador por ID
  eliminaIndicador(indicador){  
    let params = JSON.stringify(indicador);  
    let headers = new Headers ({
            'Content-Type': 'application/json',
            //se manda la cabecera el token en la etiqueta que requiere la api
            //'Authorization': this.getToken()
        });
    return this._http.put(this.url+'elimina-indicador/'+ indicador._id, params, {headers: headers}).map(res => res.json());                          
  }


  

}//de la clase