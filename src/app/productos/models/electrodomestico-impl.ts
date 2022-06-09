import { Electrodomestico } from "./electrodomestico";

export class ElectrodomesticoImpl implements Electrodomestico{

  almacen: string= '';
  tipoProducto: string = '';
  marca: string = '';
  modelo: string = '';
  calificacionEnergetica: string = '';
  precio: number = 0;
  idProducto: string= '';
  urlProducto: string= '';

  constructor(almacen: string, tipoProducto:string, marca:string, modelo:string, calificacionEnergetica:string, precio:number, idProducto:string ){}

  // para hacer el delete y el patch

  getIdProducto(urlProducto: string): string {
    urlProducto = urlProducto.slice(0, urlProducto.length - 1)
    return urlProducto.slice(urlProducto.lastIndexOf('/') + 1, urlProducto.length);
  }
}
