import { Electrodomestico } from "./electrodomestico";

export class LavadoraImpl implements Electrodomestico {

  almacen: string='';
  tipoProducto: string='';
  marca: string='';
  modelo: string='';
  calificacionEnergetica: string='';
  precio: number=0;
  capacidadCarga: number=0;
  idProducto: string='';
  urlProducto: string= '';
  numeroPulgadas: number=0;

  constructor(almacen:string, marca: string, modelo: string, calificacionEnergetica: string, precio: number, capacidadCarga: number, ){
    this.almacen = almacen;
    this.marca= marca;
    this.modelo= modelo;
    this.calificacionEnergetica= calificacionEnergetica;
    this.precio= precio;
    this.capacidadCarga=capacidadCarga;
  }

  getIdProducto(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
