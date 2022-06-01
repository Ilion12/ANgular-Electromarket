import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { LavadoraImpl } from '../models/lavadora-impl';
import { TelevisorImpl } from '../models/televisor-impl';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}productos`;
  private urlEndPointLav: string = `${this.host}lavadoras`;
  private urlEndPointTel: string = `${this.host}televisores`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getElectrodomesticos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }
  getLavadoras(): Observable<any> {
    return this.http.get<any>(this.urlEndPointLav);
  }

  getTelevisores(): Observable<any> {
    return this.http.get<any>(this.urlEndPointTel);
  }

  extraerLavadoras(respuestaApi: any): Electrodomestico[] {

    const productos: Electrodomestico[] = [];

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
    respuestaApi._embedded.productos.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    respuestaApi._embedded.lavadoras.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    respuestaApi._embedded.televisores.forEach((p: any) => {
      productos.push(this.mapearProducto(p));
    });
    return productos;
  }

  mapearProducto(productoApi: any): ElectrodomesticoImpl {
    return new ElectrodomesticoImpl(
      productoApi.marca,
      productoApi.modelo,
      productoApi.calificacionEnergetica,
      productoApi.precio,
      productoApi.tipoProducto,
      productoApi.almacen)
    }

    postProducto(producto: ElectrodomesticoImpl){
      this.http.post(this.urlEndPoint, producto).subscribe();
    }

    postLavadora(lavadora: LavadoraImpl){
      this.http.post(this.urlEndPointLav, lavadora).subscribe();
    }
    postTelevisor(televisor: TelevisorImpl){
      this.http.post(this.urlEndPointTel, televisor).subscribe();
    }
  create(producto: ElectrodomesticoImpl): Observable<any> {
    console.warn('pasando por método crear');
    return this.http.post(`${this.urlEndPoint}`, producto);
  }

  getProductosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;

  }
}
