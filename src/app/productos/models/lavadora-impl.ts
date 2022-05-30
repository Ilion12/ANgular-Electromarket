import { Electrodomestico } from "./electrodomestico";

export class LavadoraImpl implements Electrodomestico {

  almacen: string;
  tipoProducto!: string;
  marca: string;
  modelo: string;
  calificacionEnergetica: string;
  precio: number;
  numeroPulgadas!: number;
  capacidadCarga!: number;

  constructor(marca:string,modelo: string, calificacionEnergetica: string, capacidadCarga: number, precio: number, almacen:string){
    this.marca= marca;
    this.modelo= modelo;
    this.almacen= almacen;
    this.calificacionEnergetica=calificacionEnergetica;
    this.capacidadCarga=capacidadCarga;
    this.precio=precio;
  }

  getId(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
