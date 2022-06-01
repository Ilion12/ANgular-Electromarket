import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Electrodomestico[] = [];
  todosProductos: Electrodomestico[] = [];
  numPaginas: number = 0;
  productoVerDatos!: Electrodomestico;

  constructor(
    private productoService: ProductoService,
    private auxService: AuxiliarService){}

  ngOnInit(): void {
    this.productoService.getElectrodomesticos().subscribe((response) =>  {
      this.productos = this.productoService.extraerProductos(response);
      console.log('productos = ', this.productos);
      console.log('tipo producto = ', this.productos[1] instanceof ElectrodomesticoImpl);
    });

    this.getTodosProductos();
  }

  verDatos(producto: Electrodomestico): void {
    this.productoVerDatos = producto;
  }

  onProductoEliminar(producto: ElectrodomesticoImpl): void {
  this.productos = this.productos.filter(p => producto !== p)
  }

  getTodosProductos(): void {
    this.productoService.getElectrodomesticos().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.productoService.getProductosPagina(index)
          .subscribe((response) => {
            this.todosProductos.push(...this.productoService.extraerProductos(response));
          });
      }
    });
  }
  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;
}
