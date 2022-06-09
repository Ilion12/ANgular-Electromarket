import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  getId(urlEndPoint: string): String {
    throw new Error('Method not implemented.');
  }

private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes`;
  private idAlmacen: String = this.getId(this.urlEndPoint);
  private urlProductosAlmacen = `${this.urlEndPoint}/${this.idAlmacen}/electrodomesticos`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getAlmacenes(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  // extraerAlmacenes(respuestaApi: any): Almacen[] {
  //   const almacenes: Almacen[] = [];
  //   respuestaApi._embedded.almacenes.forEach((p: any) => {
  //     almacenes.push(this.mapearAlmacen(p));

  //   });
  //   return almacenes;
  // }

  // mapearAlmacen(almacenApi: any): AlmacenImpl {
  //   return new AlmacenImpl(
  //     almacenApi.localidad,
  //     almacenApi.idAlmacen,
  //     almacenApi.electrodomesticos);
  // }

  // create(almacen: Almacen): void {
  //   console.log(`Se ha creado el almacén: ${JSON.stringify(almacen)}`);
  // }

  // getAlmacenesPagina(pagina: number): Observable<any> {
  //   return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  // }

  // postProducto(almacen: AlmacenImpl){
  //   this.http.post(this.urlEndPoint,almacen).subscribe();
  //   alert('Se ha añadido un nuevo almacen')
  // }

  // delete(id: string): Observable<Almacen> {
  //   return this.http
  //     .delete<Almacen>(`${this.urlEndPoint}/${id}`)
  //     .pipe(
  //       catchError((e) => {
  //         if (e.error.mensaje) {
  //           console.error(e.error.mensaje);
  //         }
  //         return throwError(e);
  //       })
  //     );
  // }

  // getId(url:string): string {
  //   let posicionFinal: number = url.lastIndexOf('/');
  //   let numId: string = url.slice(posicionFinal + 1, url.length);
  //   return numId;

  }
