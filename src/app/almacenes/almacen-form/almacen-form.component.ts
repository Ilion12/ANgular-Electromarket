import { Component, OnInit } from '@angular/core';
import { AlmacenImpl } from '../models/almacen-impl';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-almacen-form',
  templateUrl: './almacen-form.component.html',
  styleUrls: ['./almacen-form.component.css']
})
export class AlmacenFormComponent implements OnInit {
  almacen: AlmacenImpl = new AlmacenImpl('', [], '');

  constructor(private almacenService: AlmacenService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.almacenService.postAlmacen(this.almacen).subscribe();
  }

}
