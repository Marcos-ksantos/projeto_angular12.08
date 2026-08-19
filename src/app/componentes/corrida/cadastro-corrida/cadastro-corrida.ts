import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Corridas } from '../../../modelos/corridas';
import { CorridasService } from '../../../service/corrida/corridas-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule, CommonModule, RouterLink],
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

    this.corridaService.salvarCorrida(corrida);

    this.descricao = '';
    this.data = '';
    this.distancia = '';
  }

  listar() {
    return this.corridaService.listarCorridas();
  }
}
