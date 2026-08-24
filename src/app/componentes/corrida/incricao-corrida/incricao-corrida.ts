import { Component } from '@angular/core';
import { ClientesService } from '../../../service/cliente/clientes-service';
import { Cliente } from '../../../modelos/clientes';
import { CorridasService } from '../../../service/corrida/corridas-service';
import { Corridas } from '../../../modelos/corridas';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incricao-corrida',
  imports: [CommonModule,FormsModule],
  templateUrl: './incricao-corrida.html',
  styleUrl: './incricao-corrida.css',
})
export class IncricaoCorrida {
  constructor(
    private router:Router,
    private corridaService: CorridasService,
    private clienteService: ClientesService,

) {}
}
