import { Injectable } from '@angular/core';
import { Cliente } from '../modelos/clientes';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

/*constructor(private http:HttpClient){ }

listarAtletas(): Observable<Cliente[]> {
    const urlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/crudpessoa/';
    return this.http.get<Cliente[]>(urlApi)
}

listarAtleta(id: number): Observable<Cliente> {
    const urlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/crudpessoa/';
    return this.http.get<Cliente>(urlApi)
}

salvarAtleta(cliente: Cliente): Observable<Cliente> {
    const urlApi = 'https://6a835e4dcb486d243403a5ca.mockapi.io/crudpessoa/';
    return this.http.post<Cliente>(urlApi, cliente)
}

excluirAtleta(id: number): Observable<Cliente> {
    const urlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/crudpessoa//${id}`;
    return this.http.delete<Cliente>(urlApi)
}

alterarAtleta(cliente: Cliente): Observable<Cliente> {
    const urlApi = `https://6a835e4dcb486d243403a5ca.mockapi.io/crudpessoa//${cliente.id}`;
    return this.http.put<Cliente>(urlApi, cliente)
}


}*/
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
