import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../service/clientes-service';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome:string = ''
  data:string = ''
  sexo:string = ''
  cpf:number = 0
  cep:string = ''
  uf:string = ''
  cidade:string = ''
  bairro:string = ''

  ExibirDads(){
console.log(this.nome,this.data,this.cpf,this.sexo,this.cep,this.uf,this.cidade,this.bairro,)
}

limparDados(){
  this.nome = ''
  this.data = ''
  this.cpf = 0
  this.sexo = ''
  this.cep = ''
  this.uf = ''
  this.cidade = ''
  this.bairro = ''
}

}
