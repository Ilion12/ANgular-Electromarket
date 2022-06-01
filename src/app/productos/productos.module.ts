import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductoComponent } from './productos/producto/producto.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';



@NgModule({
  declarations: [ProductosComponent, ProductoComponent, ProductoItemComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule, FormsModule, FontAwesomeModule
  ]
})
export class ProductosModule { }
