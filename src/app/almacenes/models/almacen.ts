
export interface Almacen {

  localidad: string;
  idAlmacen: string;
  electrodomesticos: any[];
  urlAlmacen: string;
  getIdAlmacen(urlAlmacen: string): string;
}
