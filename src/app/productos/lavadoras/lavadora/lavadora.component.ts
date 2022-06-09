import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { ElectrodomesticoImpl } from '../../models/electrodomestico-impl';
import { LavadoraImpl } from '../../models/lavadora-impl';

@Component({
  selector: 'app-lavadora',
  templateUrl: './lavadora.component.html',
  styleUrls: ['./lavadora.component.css']
})
export class LavadoraComponent implements OnInit {
  @Input() lavadora!: LavadoraImpl;
  @Input() producto!: ElectrodomesticoImpl;
  @Output() lavadoraEliminar = new EventEmitter<LavadoraImpl>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminar(): void {
    this.lavadoraEliminar.emit(this.lavadora);
  }

  plus=faCirclePlus;
}
