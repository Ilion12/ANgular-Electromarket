import { Electrodomestico } from "./electrodomestico";

export class ElectrodomesticoImpl implements Electrodomestico{

  almacen!: string;
  tipoProducto: string = '';
  marca: string = '';
  modelo: string = '';
  calificacionEnergetica: string = '';
  precio: number = 0;
  idProducto: string= '';
  urlProducto: string= '';
  numeroPulgadas:number= 0;
  capacidadCarga:number=0;

  constructor(almacen: string, tipoProducto:string, marca:string, modelo:string, calificacionEnergetica:string, precio:number, numeroPulgadas: number, capacidadCarga:number ){
    this.almacen=almacen;
    this.tipoProducto=tipoProducto;
    this.marca=marca;
    this.modelo=modelo;
    this.calificacionEnergetica=calificacionEnergetica;
    this.precio=precio;
    this.numeroPulgadas=numeroPulgadas;
    this.capacidadCarga=capacidadCarga;
  }

  // para hacer el delete y el patch

  getIdProducto(urlProducto: string): string {
    urlProducto = urlProducto.slice(0, urlProducto.length - 1)
    return urlProducto.slice(urlProducto.lastIndexOf('/') + 1, urlProducto.length);
  }
}
