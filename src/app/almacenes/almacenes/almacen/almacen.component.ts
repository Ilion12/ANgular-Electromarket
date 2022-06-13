import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Electrodomestico } from 'src/app/productos/models/electrodomestico';
import { ElectrodomesticoImpl } from 'src/app/productos/models/electrodomestico-impl';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';
import { AlmacenService } from '../../service/almacen.service';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {

  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;

  @Input() almacen!: AlmacenImpl;
  @Input() producto!: ElectrodomesticoImpl;
  @Output() almacenSeleccionado = new EventEmitter<Almacen>();
  @Output() productoSeleccionado= new EventEmitter<Electrodomestico>();
  @Output() almacenEliminar = new EventEmitter<Almacen>();

  constructor(private almacenService: AlmacenService,
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
          .subscribe(response => {
            this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(response));
          });
      }
    });
  }

  eliminar(): void {
    this.almacenEliminar.emit(this.almacen);
  }
}
