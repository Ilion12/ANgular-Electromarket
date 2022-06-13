import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEraser, faFilePen, faMagnifyingGlass, faPencil, faPencilAlt, faPlus, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-almacen-item',
  templateUrl: './almacen-item.component.html',
  styleUrls: ['./almacen-item.component.css']
})
export class AlmacenItemComponent implements OnInit {

  @Output() almacenResultado = new EventEmitter<Almacen>();
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() almacen: Almacen = new AlmacenImpl ('',[],'');
  @Output() almacenSeleccionado = new EventEmitter<Almacen>();

  constructor(private almacenService:AlmacenService, private auxService: AuxiliarService) { }

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
  borrarAlmacen(direccion: string): void {
    if (confirm('¿está seguro? Se borrará el almacen y todo su contenido')){
      this.almacenService.deleteAlmacen(direccion).subscribe();
    }
  }

  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  trash2=faTrash;
  x=faX;
  modificar=faFilePen;
  plus= faPlus;

}
