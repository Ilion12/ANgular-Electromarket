import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../service/busqueda.service';

@Component({
  selector: 'app-busqueda-form',
  templateUrl: './busqueda-form.component.html',
  styleUrls: ['./busqueda-form.component.css']
})
export class BusquedaFormComponent implements OnInit {
  ngOnInit(): void {

  }

  // almacen: AlmacenImpl = new AlmacenImpl('', '', []);

  constructor(private busquedaService: BusquedaService) { }

  // create(): void {
  //   this.busquedaService.create(this.busqueda)
  // }

}
