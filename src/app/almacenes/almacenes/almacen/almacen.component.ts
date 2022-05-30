import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Almacen } from '../../models/almacen';
import { AlmacenImpl } from '../../models/almacen-impl';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  @Input()
  almacen: Almacen= new AlmacenImpl('', '', []);
  @Output() almacenEliminar = new EventEmitter<Almacen>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.almacenEliminar.emit(this.almacen);
  }


}
