import { Almacen } from "./almacen";

export class AlmacenImpl implements Almacen{

  idAlmacen: number;
  localidad: string;
  electrodomesticos: any[];

  constructor(localidad: any, idAlmacen: any, electrodomesticos: any[]){
    this.localidad = localidad;
    this.idAlmacen = idAlmacen;
    this.electrodomesticos = electrodomesticos
  }

}
