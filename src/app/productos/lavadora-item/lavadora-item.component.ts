import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Lavadora } from '../models/lavadora';
import { LavadoraImpl } from '../models/lavadora-impl';
import { LavadoraService } from '../service/lavadora.service';

@Component({
  selector: 'app-lavadora-item',
  templateUrl: './lavadora-item.component.html',
  styleUrls: ['./lavadora-item.component.css']
})
export class LavadoraItemComponent implements OnInit {
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;
  @Input() lavadora: Lavadora = new LavadoraImpl('','','','','',0,0);
  @Output() lavadoraSeleccionada = new EventEmitter<Lavadora>();
  constructor(
    private lavadoraService: LavadoraService,
    private almacenService: AlmacenService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe((response) => {
    this.almacenes = this.almacenService.extraerAlmacenes(response);
});

this.getTodosAlmacenes();
}

getTodosAlmacenes(): void {
  this.almacenService.getAlmacenes().subscribe(r => {
    this.numPaginas = this.auxService.getPaginasResponse(r);
    for (let index = 1; index <= this.numPaginas; index++) {
      this.almacenService.getAlmacenesPagina(index)
        .subscribe((response) => {
          this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(response));
        });
    }
  });
}
borrarLavadora(direccion: string): void {
  this.lavadoraService.deleteLavadora(direccion);
}

modificarLavadora(lavadora: LavadoraImpl): void {
  this.lavadoraService.patchLavadora(lavadora).subscribe();
}

cambiarLavadoraa(lavadora: LavadoraImpl): void {
  this.lavadoraService.putLavadora(lavadora);
  //.subscribe()
}

pencil = faPencil;
trash = faTrashCan;
eye=faEye;
eraser=faEraser;
pilss=faCapsules;
pen=faPenToSquare;
cambio=faPenNib;


}


