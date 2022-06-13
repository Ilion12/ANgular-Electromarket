import { Televisor } from "./televisor";

export class TelevisorImpl  implements Televisor{
  numeroPulgadas: number= 0;
  almacen: string = '';
  tipoProducto: string = '';
  marca: string ='';
  modelo: string ='';
  calificacionEnergetica: string = '';
  precio: number=0;
  idProducto: string= '';
  urlProducto: string='';
  capacidadCarga: number= 0;

  constructor(almacen:string, marca: string, modelo: string, calificacionEnergetica: string, precio: number,numeroPulgadas: number){
    this.numeroPulgadas= numeroPulgadas;
    this.almacen = almacen;
    this.marca= marca;
    this.modelo= modelo;
    this.calificacionEnergetica= calificacionEnergetica;
    this.precio= precio;
  }


  getIdProducto(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }


}
