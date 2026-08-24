import { Injectable } from '@angular/core';
import { Cliente } from '../../modelos/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  CalcularIdade(data:string):number {
    const nascimento = new Date(data);
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
return idade
  }

  listarAtletas(): Observable<Cliente[]> {
    const urlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas';
    return this.http.get<Cliente[]>(urlApi);
  }

  listarAtleta(id: number): Observable<Cliente> {
    const urlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas/${id}`;
    return this.http.get<Cliente>(urlApi);
  }

  salvarAtleta(cliente: Cliente): Observable<Cliente> {
    const urlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas/';
    return this.http.post<Cliente>(urlApi, cliente);
  }

  excluirAtleta(id: number): Observable<Cliente> {
    const urlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas/${id}`;
    return this.http.delete<Cliente>(urlApi);
  }

  alterarAtleta(cliente: Cliente): Observable<Cliente> {
    const urlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas/${cliente.id}`;
    return this.http.put<Cliente>(urlApi, cliente);
  }
}
/*private clientes: Cliente[] = [];

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
*/
