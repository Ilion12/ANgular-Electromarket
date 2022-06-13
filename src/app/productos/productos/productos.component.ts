import { Component, OnInit } from '@angular/core';
import { faCirclePlus, faEye, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Electrodomestico } from '../models/electrodomestico';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { Lavadora } from '../models/lavadora';
import { Televisor } from '../models/televisor';
import { LavadoraService } from '../service/lavadora.service';
import { ProductoService } from '../service/producto.service';
import { TelevisorService } from '../service/televisor.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Electrodomestico[] = [];
  lavadoras: Lavadora[]=[];
  televisores: Televisor[]=[];
  todosProductos: Electrodomestico[] = [];
  todosTelevisores: Televisor[]=[];
  todasLavadoras: Lavadora[]=[];
  productoVerDatos!: Electrodomestico;
  lavadoraVerDatos!: Lavadora;
  televisorVerDatos!: Televisor;
  numPaginas: number = 0;

  constructor(
    private productoService: ProductoService,
    private lavadoraService: LavadoraService,
    private televisorService: TelevisorService,
    private auxService: AuxiliarService){}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((response) =>  {
      this.productos = this.productoService.extraerProductos(response);
      console.log('productos = ', this.productos);
      console.log('tipo producto = ', this.productos[1] instanceof ElectrodomesticoImpl);
    });

    this.getTodosProductos();

    // this.lavadoraService.getLavadoras().subscribe((response) =>  {
    //   this.lavadoras = this.lavadoraService.extraerLavadoras(response);
    // });
    // this.getTodasLavadoras();

    // this.televisorService.getTelevisores().subscribe((response) =>  {
    //   this.televisores = this.televisorService.extraerTelevisores(response);
    // });
    // this.getTodosTelevisores()
  }

  verDatos(producto: Electrodomestico): void {
    this.productoVerDatos = producto;
  }

  verDatosLavadoras(lavadora: Lavadora): void {
    this.lavadoraVerDatos = lavadora;
  }

  verDatosTelevisores(televisor:Televisor):void{
    this.televisorVerDatos= televisor
  }

  onProductoEliminar(producto: ElectrodomesticoImpl): void {
  console.log(`Se ha eliminado el producto de la marca ${producto.marca}`)
    this.productos = this.productos.filter(p => producto !== p)
  }

  modificarProducto(url: string): void {
    this.productoService.patchProducto(url);
  }

  getTodosProductos(): void {
    this.productoService.getProductos().subscribe(r => {
      this.todosProductos.push(...this.productoService.extraerProductos(r));
          });
      }


  // getTodosTelevisores(): void {
  //   this.televisorService.getTelevisores().subscribe(r => {
  //     this.numPaginas = this.auxService.getPaginasResponse(r);
  //     for (let index = 1; index <= this.numPaginas; index++) {
  //       this.televisorService.getTelevisoresPagina(index)
  //         .subscribe((response) => {
  //           this.todosTelevisores.push(...this.televisorService.extraerTelevisores(response));
  //         });
  //     }
  //   });
  // }

  // getTodasLavadoras(): void {
  //   this.lavadoraService.getLavadoras().subscribe(r => {
  //     this.numPaginas = this.auxService.getPaginasResponse(r);
  //     for (let index = 1; index <= this.numPaginas; index++) {
  //       this.lavadoraService.getLavadorasPagina(index)
  //         .subscribe((response) => {
  //           this.todasLavadoras.push(...this.lavadoraService.extraerLavadoras(response));
  //         });
  //     }
  //   });
  // }

  faPencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;
}
