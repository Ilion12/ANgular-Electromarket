import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Televisor } from '../models/televisor';
import { TelevisorService } from '../service/televisor.service';

@Component({
  selector: 'app-televisores',
  templateUrl: './televisores.component.html',
  styleUrls: ['./televisores.component.css']
})
export class TelevisoresComponent implements OnInit {

  televisores: Televisor[] = [];
  todosTelevisores: Televisor[] = [];
  televisoresVerDatos!: Televisor;
  numPaginas: number = 0;

  constructor(
    private televisorService: TelevisorService,
    private auxService: AuxiliarService
  ) { }

  ngOnInit(): void {
    this.televisorService.getTelevisores().subscribe((response) =>  {
    this.televisores = this.televisorService.extraerTelevisores(response);
  });

  this.getTodosTelevisores();
  }

  verDatosTelevisor(televisor: Televisor): void {
    this.televisoresVerDatos = televisor;
  }

  getTodosTelevisores(): void {
    this.televisorService.getTelevisores().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.televisorService.getTelevisoresPagina(index)
          .subscribe((response) => {
            this.todosTelevisores.push(...this.televisorService.extraerTelevisores(response));
          });
      }
    });
  }

plus=faCirclePlus;

}
