import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenFormComponent } from './almacen-form/almacen-form.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';

const routes: Routes = [{
  path: '',
  component: AlmacenesComponent
},
{
  path: 'formulario',
  component: AlmacenFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmacenesRoutingModule { }
