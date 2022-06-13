import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Lavadora } from '../models/lavadora';
import { LavadoraImpl } from '../models/lavadora-impl';

@Injectable({
  providedIn: 'root'
})
export class LavadoraService {

  private host: string = environment.host;
  private urlEndPoint1: string = `${this.host}lavadoras`;


  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }

    //get
  getLavadoras(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint1);
  }

  mapearLavadora(lavadoraApi: any): LavadoraImpl {

    let lavadoraNueva: LavadoraImpl = new LavadoraImpl('','','','',0,0);

    lavadoraNueva.almacen=lavadoraApi._links.almacen.href;
    lavadoraNueva.calificacionEnergetica=lavadoraApi.calificacionEnergetica;
    lavadoraNueva.capacidadCarga= lavadoraApi.capacidadCarga;
    lavadoraNueva.marca= lavadoraApi.marca;
    lavadoraNueva.modelo= lavadoraApi.modelo;
    lavadoraNueva.precio= lavadoraApi.precio;
    lavadoraNueva.urlProducto=lavadoraApi._links.self.href;

    return lavadoraNueva;
  }

  extraerLavadoras(respuestaApi: any): Lavadora[] {
    const lavadoras: Lavadora[] = [];
    respuestaApi._embedded.lavadoras.forEach((p: any) => {
      lavadoras.push(this.mapearLavadora(p));
    });
    return lavadoras;
  }

  //post
  postLavadora(lavadora: LavadoraImpl){
    this.http.post(this.urlEndPoint1, lavadora).subscribe();
  }

  //delete
  deleteLavadora(direccionEliminar: string){
    this.http.delete(direccionEliminar).subscribe();
  }
//patch
  patchLavadora(idLavadora:string, lavadora: LavadoraImpl){
    return this.http.put<any>(`${this.urlEndPoint1}/${idLavadora}`, lavadora);
  }

  getLavadorasPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint1, pagina);
  }
  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }
// Esto para botones dentro del primer modal

  // Para cargar en modal
  getAlmacenLavadora2(direccionConsulta: string){
    this.http.get(direccionConsulta).subscribe();
  }

  // Para cargar en modal
  getAlmacenLavadora3(direccionConsulta: string): Observable<any>{
    return this.http.get(direccionConsulta);
  }

  // // Para cargar en modal
  // getAlmacenLavadora(): Observable<any> {
  //   return this.http.get<any>(`${this.urlEndPoint1}/${this.getId}/almacen`);
  // }

}
