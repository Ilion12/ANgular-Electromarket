import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { Lavadora } from '../models/lavadora';
import { LavadoraImpl } from '../models/lavadora-impl';
import { Televisor } from '../models/televisor';
import { TelevisorImpl } from '../models/televisor-impl';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint1: string = `${this.host}productos`;
  private urlEndPointLav: string = `${this.host}lavadoras`;
  private urlEndPointTel: string = `${this.host}televisores`;


  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getProductos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  getLavadoras(): Observable<any> {
    return this.http.get<any>(this.urlEndPointLav);
  }

  getTelevisores(): Observable<any> {
    return this.http.get<any>(this.urlEndPointTel);
  }


  extraerLavadoras(respuestaApi: any): Electrodomestico[] {
    const productos: (Electrodomestico[]) = [];
    respuestaApi._embedded.lavadoras.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    return productos;
  }

  extraerTelevisores(respuestaApi: any): ElectrodomesticoImpl[] {
    const productos: Electrodomestico[] = [];
    respuestaApi._embedded.televisores.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    return productos;
  }

  extraerProductos(respuestaApi: any): Electrodomestico[] {
    const productos: Electrodomestico[] = [];
    respuestaApi._embedded.televisores.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    respuestaApi._embedded.lavadoras.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    return productos;
  }

  mapearProducto(productoApi: any): ElectrodomesticoImpl {
    let producto= new ElectrodomesticoImpl('', '','','','',0,0,0);
      producto.almacen= productoApi._links.almacen.href;
      producto.calificacionEnergetica=productoApi.calificacionEnergetica;
      producto.precio= productoApi.precio;
      producto.tipoProducto=productoApi.tipoProducto;
      producto.marca= productoApi.marca;
      producto.modelo=productoApi.modelo;
      producto.urlProducto= productoApi._links.self.href;
      producto.capacidadCarga=productoApi.capacidadCarga;
      producto.numeroPulgadas=productoApi.numeroPulgadas;
    return producto;
    }

  postProducto(producto: ElectrodomesticoImpl){
      this.http.post(this.urlEndPoint1,producto);
      alert('Se ha añadido un nuevo producto')
    }

  deleteProducto(direccionEliminar: string): Observable <any>{
      return this.http.delete(direccionEliminar);
    }
  update(idProducto: string, producto: ElectrodomesticoImpl): Observable<any> {
      return this.http
        .patch<any>(`${this.urlEndPoint1}/${idProducto}`, producto);
      }

  patchProducto(direccionEliminar: string) {
      this.http.patch(this.urlEndPoint1, direccionEliminar).subscribe();
    }

  patchProducto3(producto: ElectrodomesticoImpl) {
      return this.http.patch<any>(`${this.urlEndPoint1}/${producto.getIdProducto(producto.urlProducto)}`, producto);
    }

  putProducto(producto: ElectrodomesticoImpl) {
      return this.http.put<any>(`${this.urlEndPoint1}
      /${producto.getIdProducto(producto.urlProducto)}`, producto);
    }

  getProductosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint1, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
