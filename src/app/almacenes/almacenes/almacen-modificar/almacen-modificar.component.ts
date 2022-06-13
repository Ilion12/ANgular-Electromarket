import { Component, Input, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-almacen-modificar',
  templateUrl: './almacen-modificar.component.html',
  styleUrls: ['./almacen-modificar.component.css']
})
export class AlmacenModificarComponent implements OnInit {

    almacenes: Almacen[]=[];
    todosAlmacenes:Almacen[]=[];
    numPaginas: number = 0;


    @Input()
    almacen!: AlmacenImpl;
  constructor(private almacenService: AlmacenService, private auxService:AuxiliarService) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe((response) =>{
      this.almacenes = this.almacenService.extraerAlmacenes(response);
    })
    this.getTodosAlmacenes();
  }

  getTodosAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(r => {
      this.numPaginas=this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.almacenService.getAlmacenesPagina(index)
          .subscribe(response => {
            this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(response));
          });
      }
    });
  }

  modificarAlmacen(idAlmacen: string, almacen: AlmacenImpl): void{
    this.almacenService.patchAlmacen(idAlmacen,almacen).subscribe();
  }
}
