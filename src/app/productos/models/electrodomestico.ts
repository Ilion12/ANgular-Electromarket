export interface Electrodomestico {
  almacen:string;
  tipoProducto:string;
  marca: string;
  modelo: string;
  calificacionEnergetica: string;
  precio: number;
  numeroPulgadas: number;
  capacidadCarga: number;
  getId(url:string): string;

}
