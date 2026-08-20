import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Corridas } from '../../../modelos/corridas';
import { CorridasService } from '../../../service/corrida/corridas-service';
import { Router } from '@angular/router';
import { signal } from '@angular/core';


@Component({
  selector: 'app-lista-corridas',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-corridas.html',
  styleUrl: './lista-corridas.css',
})
export class ListaCorridas {
  ListaCorrida = signal<Corridas[]>([]);

  constructor(
    private router: Router,
    private corridaService: CorridasService,
  ) {}

  ngOnInit() {
    return this.listarCorrida();
  }

  listarCorrida() {
    this.corridaService.listarCorridas().subscribe({
      next: (dados) => {
        this.ListaCorrida.set([...dados]);
      },
      error: (msgErro) => {
        console.log(msgErro);
      },
    });
  }

  excluirCorrida(id: number) {
    if (confirm(`Deseja exluir o item ${id}??`))
      this.corridaService.excluirCorrida(id).subscribe({
        next: (resposta) => {
          console.log('Excluido com sucesso!', resposta);
          this.listarCorrida()
        },
        error: (msgErro) => {
          console.log('Erro ao excluir a corrida', msgErro);
        },
      });
  }
  carregarDadosCorrida(corrida: Corridas) {
    this.router.navigate(['/cadastro-corrida', corrida.id]);
  }
}
