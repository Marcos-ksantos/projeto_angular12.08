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
    return this.ListCorrida();
  }

  ListCorrida() {
    this.corridaService.listarCorridas().subscribe({
      next: (dados) => {
        this.ListaCorrida.set([...dados]);
      },
    });
  }
}
