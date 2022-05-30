import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;
}
