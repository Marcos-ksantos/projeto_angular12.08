import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../../service/cliente/clientes-service';
import { Cliente } from '../../../modelos/clientes';
import { Router } from '@angular/router';
import { signal } from '@angular/core';

//import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-cadastros',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-cadastros.html',
  styleUrl: './lista-cadastros.css',
})
export class ListaCadastros {
  ListaAtletas = signal<Cliente[]>([]);

  constructor(
    private router: Router,
    private clientesService: ClientesService,
  ) {}

  CalcularImc(cliente:ClientesService){
if(){

}
  }
  idadeCliente(data:string) {
return this.clientesService.CalcularIdade(data);
  }

  ngOnInit() {
    return this.listar();
  }

  listar() {
    this.clientesService.listarAtletas().subscribe({
      next: (dados) => {
        this.ListaAtletas.set([...dados]);
      },
      error: (msgErro) => {
        console.log(msgErro);
      },
    });
  }

  excluir(id: number) {
    if (confirm('Deseja Excluir o Atleta?')) {
      this.clientesService.excluirAtleta(id).subscribe({
        next: (resposta) => {
          console.log('Excluido com sucesso!', resposta);
          this.listar();
        },
        error: (msgErro) => {
          console.log('Erro ao listar Atletas', msgErro);
        },
      });
    }
  }

  CarregaDadosAtletaForm(atleta: Cliente) {
    this.router.navigate(['/formulario', atleta.idpessoa]);
  }

}
