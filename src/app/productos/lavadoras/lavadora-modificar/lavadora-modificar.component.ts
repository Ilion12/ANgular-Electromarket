import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus, faPencilAlt, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { LavadoraImpl } from '../../models/lavadora-impl';
import { LavadoraService } from '../../service/lavadora.service';

@Component({
  selector: 'app-lavadora-modificar',
  templateUrl: './lavadora-modificar.component.html',
  styleUrls: ['./lavadora-modificar.component.css']
})
export class LavadoraModificarComponent implements OnInit {

  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() lavadora!: LavadoraImpl;
  @Input() producto!: ElectrodomesticoImpl;


  constructor(
    private almacenService: AlmacenService,
    private lavadoraService: LavadoraService,
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

  modificarLavadora(lavadora: LavadoraImpl): void {
    this.lavadoraService.patchLavadora(lavadora.getIdProducto(lavadora.urlProducto), lavadora).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;
}
