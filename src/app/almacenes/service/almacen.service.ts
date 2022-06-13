import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LavadoraService } from 'src/app/productos/service/lavadora.service';
import { ProductoService } from 'src/app/productos/service/producto.service';
import { TelevisorService } from 'src/app/productos/service/televisor.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  private productoService!: ProductoService;
  private lavadoraService!: LavadoraService;
  private televisorService!: TelevisorService
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes`;


  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getAlmacenes(): Observable<any> {
    const resultado = this.http.get<any>(this.urlEndPoint);
    return resultado;
  }

  mapearAlmacen(almacenApi: any): AlmacenImpl {
    return new AlmacenImpl(
      almacenApi.localidad,
      almacenApi.electrodomesticos,
      almacenApi._links.self.href);
  }

  extraerAlmacenes(respuestaApi: any): Almacen[] {
    const almacenes: Almacen[] = [];
    respuestaApi._embedded.almacenes.forEach((a: any) => {
      almacenes.push(this.mapearAlmacen(a));

    });
    return almacenes;
  }

  create(almacen: Almacen): void {
    console.log(`Se ha creado el almacén: ${JSON.stringify(almacen)}`);
  }

  postAlmacen(almacen: AlmacenImpl): Observable<any>{
    return this.http.post(this.urlEndPoint, almacen);
  }

  postProducto(almacen: AlmacenImpl){
    this.http.post(this.urlEndPoint,almacen);
    alert('Se ha añadido un nuevo almacen')
  }
  getAlmacenesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  //para que aparezcan los productos de un almacen
  getProductosAlmacenados(almacenListar: AlmacenImpl): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${almacenListar.getIdAlmacen(almacenListar.urlAlmacen)}/electrodomesticos`);
  }

  obtenerProductosAlmacen(respuestaApi: any): any[] {
    const productos: any[] = [];
    respuestaApi._embedded.electrodomesticos.forEach((p: any) => {
      productos.push(this.productoService.mapearProducto(p));
    });
    respuestaApi._embedded.lavadoras.forEach((p: any) => {
      productos.push(this.lavadoraService.mapearLavadora(p));
    });
    respuestaApi._embedded.televisores.forEach((p: any) => {
      productos.push(this.televisorService.mapearTelevisor(p));
    });

    return productos;
  }

//

  deleteAlmacen(id: string): Observable<Almacen> {
    return this.http
      .delete<Almacen>(`${this.urlEndPoint}/${id}`)
      ;
  }
  patchAlmacen(idAlmacen: string, almacen: AlmacenImpl): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPoint}/${idAlmacen}`, almacen);
    }
}

