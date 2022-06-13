import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenImpl } from 'src/app/almacenes/models/almacen-impl';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { Televisor } from 'src/app/productos/models/televisor';
import { TelevisorService } from 'src/app/productos/service/televisor.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

televisores: Televisor[]=[];
almacenBuscado!: Almacen;
almacenes: string[]=[];
almacenesBuscados:Almacen[]=[]
marca!: string;
numeroPulgadas!: string;
almacenVerDatos: Almacen= new AlmacenImpl('',[], '');

  constructor(private televisorService:TelevisorService,
    private http:HttpClient,
    private almacenService: AlmacenService) { }

  ngOnInit(): void {
  }
  // urlTelevisoresBuscados(marca: string, numeroPulgadas: number){
  //   this.televisorService.getMetodoPersonalizado(marca, numeroPulgadas).subscribe((response) => {
  //     this.televisores = this.televisorService.extraerTelevisores(response);
  //     });
  //     this.televisores.forEach(televisor => {this.almacenes.push(televisor.almacen)
  //     });
  //     // this.almacenes.forEach(almacen=>{const resultado= this.http.get<any>(almacen).subscribe(response=>
  //     //   this.almacenBuscado=this.almacenService.extraerAlmacenes(response));
  //     //   return resultado;
  //     //   });

  // }

  verDatos(almacen: Almacen): void {
    this.almacenVerDatos = almacen;
  }

}
