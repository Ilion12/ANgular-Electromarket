import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Televisor } from '../models/televisor';
import { TelevisorImpl } from '../models/televisor-impl';

@Injectable({
  providedIn: 'root'
})
export class TelevisorService {

private host: string = environment.host;
private urlEndPoint2: string = `${this.host}televisores`;

constructor(
  private http: HttpClient,
  private auxService: AuxiliarService) { }

  //get
getTelevisores(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint2);
}

mapearTelevisor(televisorApi: any): TelevisorImpl {

  let televisorNuevo = new TelevisorImpl('','','','',0,0);

  televisorNuevo.almacen=televisorApi._links.almacen.href;
  televisorNuevo.calificacionEnergetica= televisorApi.calificacionEnergetica;
  televisorNuevo.urlProducto=televisorApi._links.self.href;
  televisorNuevo.marca= televisorApi.marca;
  televisorNuevo.modelo= televisorApi.modelo;
  televisorNuevo.precio= televisorApi.precio;
  televisorNuevo.numeroPulgadas=televisorApi.numeroPulgadas;

  return televisorNuevo;

}

extraerTelevisores(respuestaApi: any): Televisor[] {
  const televisores: Televisor[] = [];
  respuestaApi._embedded.televisores.forEach((p: any) => {
    televisores.push(this.mapearTelevisor(p));
  });
  return televisores;
}

//post
postTelevisor(televisor: TelevisorImpl){
  this.http.post(this.urlEndPoint2, televisor);
}
//delete
deleteTelevisor(direccionEliminar: string){
  this.http.delete(direccionEliminar).subscribe();
}

//patch
patchTelevisor(idTelevisor: string, televisor: TelevisorImpl) {
  return this.http.patch<any>(`${this.urlEndPoint2}/${idTelevisor}`, televisor);
}

getTelevisoresPagina(pagina: number): Observable<any> {
  return this.auxService.getItemsPorPagina(this.urlEndPoint2, pagina);
}
getId(url:string): string {
  let posicionFinal: number = url.lastIndexOf('/');
  let numId: string = url.slice(posicionFinal + 1, url.length);
  return numId;
}

// getMetodoPersonalizado(marca:string, numeroPulgadas:number): Observable<any>{
//   this.marca=marca;
//   this.numeroPulgadas=numeroPulgadas;
//   return this.http.get<any>(`${this.urlMetodo}`);
// }

// Para cargar en modal
getAlmacenTelevisor2(direccionConsulta: string){
  this.http.get(direccionConsulta).subscribe();
}

// Para cargar en modal
getAlmacenTelevisor3(direccionConsulta: string): Observable<any>{
  return this.http.get(direccionConsulta);
}

// // Para cargar en modal
// getAlmacenTelevisor(): Observable<any> {
//   return this.http.get<any>(`${this.urlEndPoint1}/${this.getId}/almacen`);
// }

}


