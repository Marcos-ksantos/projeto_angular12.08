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

CalcularData(dataCorrida:string){
  const data = new Date(dataCorrida);
  const hoje = new Date();

  let CorridaMes = hoje.getMonth() - data.getMonth()
  let CorridaAno = hoje.getFullYear() - data.getFullYear()
  let CorridaDia = hoje.getDate() - data.getDate()

  if (data < hoje ){
 dataCorrida =`Corrida ja ocorreu`
  }else{
    
  }
}

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
    if (confirm(`Deseja exluir a corrida?`))
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
