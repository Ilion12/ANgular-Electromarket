import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenesRoutingModule } from './almacenes-routing.module';
import { AlmacenesComponent } from './almacenes/almacenes.component';
import { AlmacenComponent } from './almacenes/almacen/almacen.component';
import { AlmacenItemComponent } from './almacen-item/almacen-item.component';
import { AlmacenFormComponent } from './almacen-form/almacen-form.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlmacenModificarComponent } from './almacenes/almacen-modificar/almacen-modificar.component';


@NgModule({
  declarations: [
    AlmacenesComponent,
    AlmacenComponent,
    AlmacenItemComponent,
    AlmacenFormComponent,
    AlmacenModificarComponent
  ],
  imports: [
    CommonModule,
    AlmacenesRoutingModule, FormsModule, FontAwesomeModule,
  ],
  providers: [AuxiliarService],
  exports:[AlmacenItemComponent]
})
export class AlmacenesModule { }
