import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
}
