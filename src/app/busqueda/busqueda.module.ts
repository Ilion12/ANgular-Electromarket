import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlmacenesModule } from '../almacenes/almacenes.module';
import { FormsModule } from '@angular/forms';
import { ProductosModule } from '../productos/productos.module';


@NgModule({
  declarations: [
    BusquedaComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,
    BusquedaRoutingModule, FormsModule, AlmacenesModule, ProductosModule
  ]
})
export class BusquedaModule { }
