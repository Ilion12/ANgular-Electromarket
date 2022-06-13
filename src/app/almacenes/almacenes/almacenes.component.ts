import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Electrodomestico } from 'src/app/productos/models/electrodomestico';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Almacen } from '../models/almacen';
import { AlmacenImpl } from '../models/almacen-impl';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.css']
})
export class AlmacenesComponent implements OnInit {

  almacenes: Almacen[] = [];
  todosAlmacenes: Almacen[] = [];
  numPaginas: number = 0;
  almacenVerDatos: Almacen= new AlmacenImpl('', [], '');
  productos: Electrodomestico[]=[];
  productoVerDatos!: Electrodomestico;


  constructor(
    private almacenService: AlmacenService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.almacenService.getAlmacenes().subscribe((response) => this.almacenes = this.almacenService.extraerAlmacenes(response));
    this.getTodosAlmacenes();
  }

  verDatos(almacen: Almacen): void {
    this.almacenVerDatos = almacen;
  }

  verDatosProducto(producto:Electrodomestico): void{
    this.productoVerDatos= producto;
  }

  onAlmacenEliminar(almacen: Almacen): void {
    console.log(`He eliminado el almacen de la localidad de ${almacen.localidad}`);
    this.almacenes = this.almacenes.filter(p => almacen !== p)
  }
  getTodosAlmacenes(): void {
    this.almacenService.getAlmacenes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.almacenService.getAlmacenesPagina(index)
          .subscribe(response => {
            this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(response));
          });
      }
    });
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
  plus=faCirclePlus;
}
