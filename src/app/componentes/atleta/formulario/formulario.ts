import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../../service/cliente/clientes-service';
import { Cliente } from '../../../modelos/clientes';
import { ActivatedRoute } from '@angular/router';

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
  idade: number = 0;
  idCliente = 0;
  edit = false;

  constructor(
    private clienteService: ClientesService,
    private router: ActivatedRoute,
    private change: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.idCliente = Number(this.router.snapshot.paramMap.get('id'));

    if (this.idCliente > 0) {
      this.edit = true;
      this.CarregaDados(this.idCliente);
    }
  }

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

  CarregaDados(id: number) {
    this.clienteService.listarAtleta(id).subscribe({
      next: (dadosCliente) => {
        this.nome = dadosCliente.nome;
        this.data = dadosCliente.data;
        this.cpf = dadosCliente.cpf;
        this.sexo = dadosCliente.sexo;
        this.cep = dadosCliente.cep;
        this.uf = dadosCliente.uf;
        this.cidade = dadosCliente.cidade;
        this.bairro = dadosCliente.bairro;

        this.change.detectChanges();
      },
      error: (msgErro) => {
        console.log('Erro ao carregar componentes', msgErro);
      },
    });
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

    if (this.edit) {
      cliente.id = this.idCliente;
      this.clienteService.alterarAtleta(cliente).subscribe({
        next: (resposta) => {
          console.log(resposta);
        },
        error: (msgErro) => {
          console.log(msgErro);
        },
      });
    } else {
      this.clienteService.salvarAtleta(cliente).subscribe({
        next: (resposta) => {
          console.log(resposta);
        },
        error: (msgErro) => {
          console.log(msgErro);
        },
      });
    }
    this.limparDados();

    this.clienteService.listarAtletas();
  }
}
