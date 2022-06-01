import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto!: ElectrodomesticoImpl;
  @Output() productoEliminar = new EventEmitter<ElectrodomesticoImpl>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.productoEliminar.emit(this.producto);
  }

  plus=faCirclePlus;
}
