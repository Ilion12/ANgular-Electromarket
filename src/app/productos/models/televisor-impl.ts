import { Televisor } from "./televisor";

export class TelevisorImpl  implements Televisor{
  numeroPulgadas!: number;
  almacen!: string;
  tipoProducto!: string;
  marca: string;
  modelo!: string;
  calificacionEnergetica!: string;
  precio!: number;
  capacidadCarga!: number;

  constructor(marca:string,modelo: string, calificacionEnergetica: string, numeroPulgadas: number, precio: number, almacen:string){
    this.marca= marca;
    this.modelo= modelo;
    this.almacen= this.almacen;
    this.calificacionEnergetica=calificacionEnergetica;
    this.numeroPulgadas= numeroPulgadas;
    this.precio=precio;
  }
  getId(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
