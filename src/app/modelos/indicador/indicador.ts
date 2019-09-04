import { Parametro } from "../parametro/parametro";
import { Rango } from "../indicador/rango";

export class Indicador {
  constructor(
            indi?: String,
            proceso?: String,
            parametro?: [{Parametro}],
            observacion?: String,
            rango?: [Rango],
            resultado?: Number,
            fecha?: String
  ) {}
}

