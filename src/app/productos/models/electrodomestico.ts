export interface Electrodomestico {
  almacen:string;
  tipoProducto:string;
  marca: string;
  modelo: string;
  calificacionEnergetica: string;
  precio: number;
  idProducto: string;
  urlProducto: string;
  getIdProducto(urlProducto: string): string;

}
