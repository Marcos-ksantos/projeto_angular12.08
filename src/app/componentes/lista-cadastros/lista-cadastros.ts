import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../service/clientes-service';
import { Cliente } from '../../modelos/clientes';
import { Router } from '@angular/router';
//import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-cadastros',
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-cadastros.html',
  styleUrl: './lista-cadastros.css',
})
export class ListaCadastros {

  constructor(
    private router:Router,
    private clientesService:ClientesService
    ){}


ngOnInit(){
  return this.clientesService.Listar()
}

}
