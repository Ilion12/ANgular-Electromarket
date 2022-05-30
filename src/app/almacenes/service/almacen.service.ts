import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getAlmacenes(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerAlmacenes(respuestaApi: any): Almacen[] {
    const almacenes: Almacen[] = [];
    respuestaApi._embedded.almacenes.forEach((p: any) => {
      almacenes.push(this.mapearAlmacen(p));

    });
    return almacenes;
  }

  mapearAlmacen(almacenApi: any): AlmacenImpl {
    return new AlmacenImpl(
      almacenApi.localidad,
      almacenApi.idAlmacen,
      almacenApi.electrodomesticos);
  }

  create(almacen: Almacen): void {
    console.log(`Se ha creado el almacén: ${JSON.stringify(almacen)}`);
  }

  getAlmacenesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

}
