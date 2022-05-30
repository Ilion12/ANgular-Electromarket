import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}almacenes/idAlmacen/electrodomesticos`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getElectrodomesticos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPrdouctos(respuestaApi: any): [] {
    const productos: Electrodomestico[] = [];
    respuestaApi._embedded.productos.forEach((p: any) => {
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
      productoApi.id,
      productoApi.almacen,
      productoApi.numeroPulgadas,
      productoApi.capacidadCarga)
  }

  create(producto: Producto): void {
    console.log(`Se ha añadido el producto: ${JSON.stringify(producto)}`);
  }

  getProductosPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }

}
