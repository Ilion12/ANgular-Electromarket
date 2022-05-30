import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { LavadorasComponent } from './lavadoras/lavadoras.component';
import { LavadoraComponent } from './lavadora/lavadora.component';
import { ElectrodomesticoComponent } from './electrodomestico/electrodomestico.component';
import { TelevisorComponent } from './televisor/televisor.component';


@NgModule({
  declarations: [
    ProductosComponent,
    ElectrodomesticosComponent,
    LavadorasComponent,
    LavadoraComponent,
    ElectrodomesticoComponent,
    TelevisorComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
