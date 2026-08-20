import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Corridas } from '../../../modelos/corridas';
import { CorridasService } from '../../../service/corrida/corridas-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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

  idCorrida = 0;
  edit = false;

  constructor(
    private router: ActivatedRoute,
    private corridaService: CorridasService,
    private change: ChangeDetectorRef,
  ) {}

  ngOnInit(){
    this.idCorrida = Number(this.router.snapshot.paramMap.get('id'));
if(this.idCorrida > 0){
this.edit=true
this.CarregarDadosCorrida(this.idCorrida)
}
  }

 /* adicionar() {
    const corrida = new Corridas();
    corrida.descricaoCorrida = this.descricao;
    corrida.dataCorrida = this.data;
    corrida.distCorrida = this.distancia;

    this.corridaService.salvarCorrida(corrida);

    this.descricao = '';
    this.data = '';
    this.distancia = '';
 }*/

  limparDados() {
    this.descricao = '';
    this.data = '';
    this.distancia = '';
  }

  CarregarDadosCorrida(id: number) {
    this.corridaService.listarCorrida(id).subscribe({
      next: (dadosCorrida) => {
        this.descricao = dadosCorrida.descricaoCorrida;
        this.data = dadosCorrida.dataCorrida;
        this.distancia = dadosCorrida.distCorrida;

        this.change.detectChanges()
      },
      error: (msgErro) => {
        console.log('Erro ao carregar componentes', msgErro);
      },
    });
  }

  enviarDadosCorrida() {
    const corrida = new Corridas();

    corrida.descricaoCorrida = this.descricao;
    corrida.dataCorrida = this.data;
    corrida.distCorrida = this.distancia;

    if (this.edit) {
      corrida.id = this.idCorrida;
      this.corridaService.alterarCorrida(corrida).subscribe({
        next: (resposta) => {
          console.log(resposta);
        },
        error: (msgErro) => {
          console.log(msgErro);
        },

      });

    } else {
this.corridaService.salvarCorrida(corrida)
.subscribe({
  next: (resposta) => {
    console.log(resposta);
  },
  error: (msgErro) => {
    console.log(msgErro);
  },
})
    }
this.limparDados()
this.corridaService.listarCorridas();
  }

}
