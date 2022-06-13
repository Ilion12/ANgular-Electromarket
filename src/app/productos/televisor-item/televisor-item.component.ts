import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrashCan, faEye, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Lavadora } from '../models/lavadora';
import { LavadoraImpl } from '../models/lavadora-impl';
import { Televisor } from '../models/televisor';
import { TelevisorImpl } from '../models/televisor-impl';
import { LavadoraService } from '../service/lavadora.service';
import { TelevisorService } from '../service/televisor.service';

@Component({
  selector: 'app-televisor-item',
  templateUrl: './televisor-item.component.html',
  styleUrls: ['./televisor-item.component.css']
})
export class TelevisorItemComponent implements OnInit {
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() televisor: Televisor = new TelevisorImpl('','','','',0,0);
  @Output() televisorSeleccionado = new EventEmitter<Televisor>();
  @Output() almacenResultado = new EventEmitter<Almacen>();

  constructor(
    private televisorService: TelevisorService,
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

//delete
borrarTelevisor(direccion: string): void {
  this.televisorService.deleteTelevisor(direccion);
}

//patch
modificarTelevisor(idTelevisor:string, televisor: TelevisorImpl): void {
  this.televisorService.patchTelevisor(idTelevisor,televisor).subscribe();
}

// Para el MODAL
obtenerAlmacen(){
  // this.asociacionResultado = this.farmaciaService.getAsociacionFarmacia3(this.farmacia.asociacion);
  return this.televisorService.getAlmacenTelevisor2(this.televisor.almacen);
}

pencil = faPencil;
trash = faTrashCan;
eye=faEye;
eraser=faEraser;
pilss=faCapsules;
pen=faPenToSquare;
cambio=faPenNib;

}
