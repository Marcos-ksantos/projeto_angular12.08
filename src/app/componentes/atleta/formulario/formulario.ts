import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../../service/clientes-service';
import { Cliente } from '../../../modelos/clientes';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome: string = '';
  data: string = '';
  sexo: string = '';
  cpf: number = 0;
  cep: string = '';
  uf: string = '';
  cidade: string = '';
  bairro: string = '';

  constructor(private clienteService: ClientesService) {}

  ExibirDads() {
    console.log(
      this.nome,
      this.data,
      this.cpf,
      this.sexo,
      this.cep,
      this.uf,
      this.cidade,
      this.bairro,
    );

    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.data = '';
    this.cpf = 0;
    this.sexo = '';
    this.cep = '';
    this.uf = '';
    this.cidade = '';
    this.bairro = '';
  }

  enviarDados() {
    const cliente = new Cliente();

    cliente.nome = this.nome;
    cliente.data = this.data;
    cliente.sexo = this.sexo;
    cliente.cpf = this.cpf;
    cliente.cep = this.cep;
    cliente.uf = this.uf;
    cliente.cidade = this.cidade;
    cliente.bairro = this.bairro;

    this.clienteService.salvarAtleta(cliente).subscribe({
      next: (resposta) => {
        console.log(resposta);
      },
      error: (msgErro) => {
        console.log(msgErro);
      },
    });

    this.limparDados();

    this.clienteService.listarAtletas();
  }
}
