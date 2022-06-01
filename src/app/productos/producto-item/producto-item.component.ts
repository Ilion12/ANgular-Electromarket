import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input() producto: Electrodomestico = new ElectrodomesticoImpl('', '', '', '', '', 0);
  @Output() productoSeleccionado = new EventEmitter<Electrodomestico>();
  constructor() { }

  ngOnInit(): void {
    console.log('producto = ', this.producto);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;

}
