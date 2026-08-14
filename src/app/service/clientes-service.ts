import { Injectable } from '@angular/core';
import { Clientes } from '../modelos/clientes';


@Injectable({
    providedIn:'root'
})

export class ClientesService {
    private clientes: Clientes [] = []

    adicionar(clientes: Clientes){
        this.clientes.push(clientes)
    }

    Listar(){
        console.table(this.clientes)

        return this.clientes
    }

    Remover(id: number){
this.clientes = this.clientes.filter(elem => elem.id !== elem.id)
    }

    Remover2(clientes: Clientes){
        let pos = this.clientes.findIndex(elem =>elem.id !== clientes.id)
        this.clientes[pos] = clientes
    }
}
