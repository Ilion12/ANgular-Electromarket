import { Almacen } from "./almacen";

export class AlmacenImpl implements Almacen{

  idAlmacen!: string;
  localidad!: string;
  electrodomesticos!: any[];
  urlAlmacen!: string;

  constructor(localidad: any, electrodomesticos: any[], urlAlmacen: string){
    this.localidad = localidad;
    this.electrodomesticos = electrodomesticos;
    this.urlAlmacen=urlAlmacen;
  }
  getIdAlmacen(url: string): string {
	 return url.slice(url.lastIndexOf('/') + 1, url.length);
	}

}
