import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { LavadorasComponent } from './lavadoras/lavadoras.component';
import { TelevisoresComponent } from './televisores/televisores.component';
import { CargarProductosComponent } from './cargar-productos/cargar-productos.component';

const routes: Routes = [
  {
    path:'',
    component: CargarProductosComponent,
    children: [
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'formulario-productos',
        component: ProductosFormComponent,
      },
      {
        path: 'lavadoras',
        component: LavadorasComponent
      },
      {
        path: 'televisores',
        component: TelevisoresComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
