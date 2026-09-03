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
  // nome: string = '';
  // data: string = '';
  // sexo: string = '';
  idpessoa: number = 0;
  nome: string = '';
  sexo: string = '';
  datanascimento: string = '';
  peso: number = 0;
  altura: number = 0.0;
  //cpf: number = 0;
  //cep: string = '';
  // uf: string = '';
  //cidade: string = '';//
  // bairro: string = '';
  //// idade: number = 0;
  idCliente: number = 0;
  edit: boolean = false;

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
      this.sexo,
      this.datanascimento,
      this.peso,
      this.altura,
      //this.nome,
      //this.data,
      //this.cpf,
      //this.sexo,
      //this.cep,
      //this.uf,
      //this.cidade,
      //this.bairro,
    );

    this.limparDados();
  }

  limparDados() {
    this.nome;
    this.sexo;
    this.datanascimento;
    this.peso;
    this.altura;
    //this.nome = '';
    //this.data = '';
    //this.cpf = 0;
    //this.sexo = '';
    //this.cep = '';
    //this.uf = '';
    //this.cidade = '';
    //this.bairro = '';
  }

  CarregaDados(id: number) {
    this.clienteService.listarAtleta(id).subscribe({
      next: (dadosCliente) => {
        this.nome = dadosCliente.nome;
        this.datanascimento = dadosCliente.datanascimento;
        //this.cpf = dadosCliente.cpf;
        this.sexo = dadosCliente.sexo;
        this.altura = dadosCliente.altura;
        this.peso = dadosCliente.peso;
        //this.cep = dadosCliente.cep;
        //this.uf = dadosCliente.uf;
        // this.cidade = dadosCliente.cidade;
        // this.bairro = dadosCliente.bairro;

        this.change.detectChanges();
      },
      error: (msgErro) => {
        console.log('Erro ao carregar componentes', msgErro);
      },
    });
  }

  enviarDados(form:any) {
    if(form.invalid){
      console.log('Campo vazio!')
      return;
    }
    const cliente = new Cliente();

    cliente.nome = this.nome;
    cliente.sexo = this.sexo;
    cliente.datanascimento = this.datanascimento;
    cliente.peso = this.peso;
    cliente.altura = this.altura;
    //cliente.sexo = this.sexo;
    // cliente.cpf = this.cpf;
    // cliente.cep = this.cep;
    //cliente.uf = this.uf;
    // cliente.cidade = this.cidade;
    // cliente.bairro = this.bairro;
    console.log('Dados enviados:', cliente);
    if (this.edit) {
      cliente.idpessoa = this.idCliente;

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
          console.log('Cadastrado com sucesso:', resposta);
        },
        error: (erro) => {
          console.error('ERRO AO CADASTRAR:', erro);
          console.error('STATUS:', erro.status);
          console.error('BACKEND:', erro.error);

          console.log('DETALHE:', JSON.stringify(erro.error?.detail, null, 2));
        },
      });
    }
  }
}
