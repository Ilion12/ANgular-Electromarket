import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LavadoraItemComponent } from './lavadora-item/lavadora-item.component';
import { LavadorasComponent } from './lavadoras/lavadoras.component';
import { LavadoraComponent } from './lavadoras/lavadora/lavadora.component';
import { TelevisoresComponent } from './televisores/televisores.component';
import { TelevisorComponent } from './televisores/televisor/televisor.component';
import { TelevisorItemComponent } from './televisor-item/televisor-item.component';
import { TelevisorModificarComponent } from './televisores/televisor-modificar/televisor-modificar.component';
import { LavadoraModificarComponent } from './lavadoras/lavadora-modificar/lavadora-modificar.component';
import { AuxiliarService } from '../service/auxiliar.service';
import { AlmacenesModule } from '../almacenes/almacenes.module';




@NgModule({
  declarations: [
    ProductosComponent,
    ProductoComponent,
    ProductoItemComponent,
    ProductosFormComponent,
    LavadoraItemComponent,
    LavadorasComponent,
    LavadoraComponent,
    TelevisoresComponent,
    TelevisorComponent,
    TelevisorItemComponent,
    TelevisorModificarComponent,
    LavadoraModificarComponent],

  imports: [
     CommonModule,
     ProductosRoutingModule,
     FormsModule,
     FontAwesomeModule,
     HttpClientModule
  ],
  providers: [
    AuxiliarService
  ]
})
export class ProductosModule { }
