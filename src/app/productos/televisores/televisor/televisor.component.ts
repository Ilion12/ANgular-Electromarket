import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { TelevisorImpl } from '../../models/televisor-impl';
import { LavadoraService } from '../../service/lavadora.service';
import { TelevisorService } from '../../service/televisor.service';

@Component({
  selector: 'app-televisor',
  templateUrl: './televisor.component.html',
  styleUrls: ['./televisor.component.css']
})
export class TelevisorComponent implements OnInit {

  urlParaGet!: string;
  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input()
  televisor!: TelevisorImpl;
  @Input()
  producto!: ElectrodomesticoImpl;
  @Output()
  televisorEliminar = new EventEmitter<TelevisorImpl>();

  constructor(
    private almacenService: AlmacenService,
    private televisorService: TelevisorService,
    private auxService: AuxiliarService
  ) { }

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
obtenerAlmacen(){
  // this.farmaciaService.getAsociacionFarmacia2(this.farmacia.asociacion)
  return this.televisorService.getAlmacenTelevisor2(this.televisor.almacen);
}

almacenString(){
  return this.televisorService.getAlmacenTelevisor3(this.televisor.almacen).subscribe();
}

  plus=faCirclePlus;


}

