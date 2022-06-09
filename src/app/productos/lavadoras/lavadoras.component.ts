import { Component, OnInit } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Lavadora } from '../models/lavadora';
import { LavadoraService } from '../service/lavadora.service';

@Component({
  selector: 'app-lavadoras',
  templateUrl: './lavadoras.component.html',
  styleUrls: ['./lavadoras.component.css']
})
export class LavadorasComponent implements OnInit {

  lavadoras: Lavadora[] = [];
  todasLavadoras: Lavadora[] = [];
  lavadoraVerDatos!: Lavadora;
  numPaginas: number = 0;

  constructor(private lavadoraService: LavadoraService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {this.lavadoraService.getLavadoras().subscribe((response) =>  {
    this.lavadoras = this.lavadoraService.extraerLavadoras(response);
  });

  this.getTodasLavadoras();
  }
  verDatosLavadora(lavadora: Lavadora): void {
    this.lavadoraVerDatos = lavadora;
  }
  getTodasLavadoras(): void {
    this.lavadoraService.getLavadoras().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.lavadoraService.getLavadorasPagina(index)
          .subscribe((response) => {
            this.todasLavadoras.push(...this.lavadoraService.extraerLavadoras(response));
          });
      }
    });
  }

  plus=faCirclePlus;
}
