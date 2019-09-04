import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumador0'
})
@Injectable()
export class sumador implements PipeTransform{
  transform(items: any):any {
    let x: number;
    let y: number;
    let t = items.length ;
    y =0;
    while(t--){
     x = items[t]["parametro"][0]["ingresa"] * 1;
     y = y + x;
    }
    return y;
  }
}

@Pipe({
  name: 'sumador1'
})
@Injectable()
export class sumador1Pipe implements PipeTransform{
  transform(items: any):any {
    let x: number;
    let y: number;
    let t = items.length ;
    y =0;
    while(t--){
     x = items[t]["parametro"][1]["ingresa"] * 1;
     y = y + x;
    }
    return y;
  }
}

@Pipe({
  name: 'resultado'
})
@Injectable()
export class resultadoPipe implements PipeTransform{
  transform(items: any):any {
    let x: number;
    let y: number;
    let r: number;
    let t = items.length ;
    y =0;
    while(t--){
     x = items[t]["resultado"] * 1
     y = y + x
     r= y / (items.length * 1)
     r = r.toFixed(0)
    }
    return r;
  }
}

@Pipe({
  name: 'fechaInicio'
})
@Injectable()
export class FechaInicioPipe implements PipeTransform {
  transform(values: any, args?: any): any {
    let newDate = new Date(args);
    if(args === undefined ){
      return values;
    }
    if(args === "" ){
      return values;
    }
    return values.filter(function(value){
      return  value.fecha>=args
    });
  }
}

@Pipe({
  name: 'fechaTermino'
})
@Injectable()
export class fechaTerminoPipe implements PipeTransform {
  transform(values: any, args?: any): any {
    let newDate = new Date(args);
    if(args === undefined ){
      return values;
    }
    if(args === "" ){
      return values;
    }
    return values.filter(function(value){
      return  value.fecha<=args
    });
  }
}
//filtro para las muestras
@Pipe({
  name: 'tipo'
})
@Injectable()
export class tipoPipe implements PipeTransform{
   transform(items: any, term: any):any {
     //si no hay tipo, salen los indicadores con datos
   if(term === undefined || term == false ){
     return items.filter(function(item){
      if(item.tipo == undefined)
      var x =item
      //devuelve los valores encontrados
      return x;
    });
   }
     //si existe la propiedad tipo, salen las muestras
     return items.filter(function(item){
        if(item.tipo != undefined)
        var x =item
      //devuelve los valores encontrados
      return x;
    });  
  }
}

@Pipe({
  name: 'proceso'
})
@Injectable()
export class procesoPipe implements PipeTransform{
   transform(items: any, term: any):any {
     //si no hay tipo, salen los indicadores con datos
   if(term == undefined ){
      return items;
    
   }
     //si existe la propiedad tipo, salen las muestras
     return items.filter(function(item){
        if(item.proceso == term)
        return item;
      //devuelve los valores encontrados
      
    });  
  }
}



@Pipe({
  name: 'titulo'
})
@Injectable()
export class tituloPipe implements PipeTransform{
   transform(items: any, term: any):any {
   if(term === undefined )
      return items;

    
    
    return items[0].indi;
       
  }
}


