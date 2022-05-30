import { Electrodomestico } from "./electrodomestico";

export class ElectrodomesticoImpl implements Electrodomestico{

  almacen!: string;
  tipoProducto!: string;
  marca!: string;
  modelo!: string;
  calificacionEnergetica!: string;
  precio!: number;
  numeroPulgadas!: number;
  capacidadCarga!: number;

  constructor(almacen:string, tipoProducto:string, marca:string, modelo: string, calificacionEnergetica: string, precio: number){
    this.almacen= almacen;
    this.tipoProducto=tipoProducto;
    this.calificacionEnergetica= calificacionEnergetica;
    this.marca=marca;
    this.modelo = modelo;
    this.precio=precio;
  }

  getId(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
