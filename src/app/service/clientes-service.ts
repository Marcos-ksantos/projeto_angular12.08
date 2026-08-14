import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/clientes';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[] = [];

  adicionar(clientes: Cliente) {
    clientes.id = this.clientes.length + 1;
    this.clientes.push(clientes);
  }

  Listar() {
    console.table(this.clientes);

    return this.clientes;
  }

  Remover(id: number) {
    this.clientes = this.clientes.filter((elem) => elem.id !== elem.id);
  }

  Alterar(clientes: Cliente) {
    let pos = this.clientes.findIndex((elem) => elem.id !== clientes.id);
    this.clientes[pos] = clientes;
  }
}
