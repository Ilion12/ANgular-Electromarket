import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEraser, faEye, faFilePen, faPencil, faPenNib, faTrash, faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

    almacenes: Almacen[]=[];
    todosAlmacenes: Almacen[]=[];
    numPaginas: number= 0;

  @Input() producto: Electrodomestico = new ElectrodomesticoImpl('','','','','',0,0,0);
  @Output() productoNuevo: Electrodomestico= new ElectrodomesticoImpl('','','','','',0,0,0);
  @Output() productoSeleccionado = new EventEmitter<Electrodomestico>();

  constructor(private productoService: ProductoService,
    private almacenService: AlmacenService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    console.log('producto = ', this.producto);
    this.almacenService.getAlmacenes().subscribe((response) => {
      this.almacenes = this.almacenService.extraerAlmacenes(response);
  });

  this.getTodosAlmacenes();
  }

  getTodosAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.almacenService.getAlmacenesPagina(index)
          .subscribe((response) => {
            this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(response));
          });
      }
    });
  }

  borrarProducto(direccion: string): void {
    if (confirm('¿Quiere borrar este producto?')){
      this.productoService.deleteProducto(direccion).subscribe();
    }
    this.ngOnInit();
    }

  modificarProducto(producto: ElectrodomesticoImpl): void {
    this.productoService.patchProducto3(producto).subscribe();
  }

  modificarProducto3(producto: ElectrodomesticoImpl): void {
    this.productoService.patchProducto3(producto).subscribe();
  }

  cambiarProducto(producto: ElectrodomesticoImpl): void {
    this.productoService.putProducto(producto).subscribe();
  }

  actualizarProducto(producto: ElectrodomesticoImpl): void {
    this.productoService.update(producto.getIdProducto(producto.urlProducto), producto).subscribe();
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  eraser= faEraser;
  trash2=faTrash;
  x=faX;
  modificar=faFilePen;
  cambio=faPenNib;
}
