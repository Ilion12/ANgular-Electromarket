import { Almacen } from "src/app/almacenes/models/almacen";

export interface Electrodomestico {
  almacen:string;
  tipoProducto:string;
  marca: string;
  modelo: string;
  calificacionEnergetica: string;
  precio: number;
  numeroPulgadas:number;
  capacidadCarga:number;
  idProducto: string;
  // para hacer los métodos Delete y Patch
  urlProducto: string;
  getIdProducto(urlProducto: string): string;

}
