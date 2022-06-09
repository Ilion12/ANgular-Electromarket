import { Component, OnInit } from '@angular/core';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Almacen } from 'src/app/almacenes/models/almacen';
import { AlmacenService } from 'src/app/almacenes/service/almacen.service';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { ElectrodomesticoImpl } from '../models/electrodomestico-impl';
import { LavadoraImpl } from '../models/lavadora-impl';
import { TelevisorImpl } from '../models/televisor-impl';
import { LavadoraService } from '../service/lavadora.service';
import { ProductoService } from '../service/producto.service';
import { TelevisorService } from '../service/televisor.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  electrodomestico: ElectrodomesticoImpl = new ElectrodomesticoImpl();
  lavadora: LavadoraImpl = new LavadoraImpl('','', '','','',0,0);
  televisor: TelevisorImpl = new TelevisorImpl('','','','','',0, 0);
  almacenes:Almacen[]=[];
  todosAlmacenes: Almacen []=[];
  numPaginas:number = 0;

  constructor(
    private electrodomesticoService: ProductoService,
    private televisorService: TelevisorService,
    private lavadoraService: LavadoraService,
    private auxService: AuxiliarService,
    private almacenService: AlmacenService) { }

  ngOnInit(): void {this.almacenService.getAlmacenes().subscribe((response) => {
    this.almacenes = this.almacenService.extraerAlmacenes(response);});

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


  create(): void {
    console.info('paso por metodo de formulario');
    this.electrodomesticoService.postProducto(this.electrodomestico);
  }

  crearLavadora(): void {
    console.warn('paso por metodo del POST Lavadora');
    this.lavadoraService.postLavadora(this.lavadora);
  }

  crearTelevisor(): void {
    this.televisorService.postTelevisor(this.televisor);
  }

  pencil=faPencil;
  eye=faEye;
  trash=faTrashCan;
}

