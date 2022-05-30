import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: 'almacenes',
    loadChildren: () => import("./almacenes/almacenes.module").then((m) => m.AlmacenesModule),
  },
  {
  path: 'productos',
  loadChildren: () => import("./productos/productos.module").then((m) => m.ProductosModule),
  },
  // {
  //   path: 'almacenes',
  //   loadChildren: ()=> import("./almacenes/almacenes.module").then((m) => m.AlmacenesModule),
  // },
  {
    path: "not-found",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

