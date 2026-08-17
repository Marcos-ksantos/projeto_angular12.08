import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Corridas } from '../../modelos/corridas';
import { CorridasService } from '../../service/corridas-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {
  descricao: string = '';
  data: string = '';
  distancia: string = '';

  constructor(
    private router: Router,
    private corridaService: CorridasService,
  ) {}

  adicionar() {
    const corrida = new Corridas();
    corrida.descricaoCorrida = this.descricao;
    corrida.dataCorrida = this.data;
    corrida.distCorrida = this.distancia;

    this.corridaService.addCorrida(corrida);

    this.descricao= '';
    this.data= '';
    this.distancia= '';
  }

  ngOnInit(){
    return this.corridaService.ListCorrida()
  }
}
