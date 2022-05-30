import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';

@Component({
  selector: 'app-almacen-item',
  templateUrl: './almacen-item.component.html',
  styleUrls: ['./almacen-item.component.css']
})
export class AlmacenItemComponent implements OnInit {
  @Input()
  almacen: Almacen = new AlmacenImpl ('','', []);
  @Output() almacenSeleccionado = new EventEmitter<Almacen>();

  constructor() { }

  ngOnInit(): void {
  }

}
