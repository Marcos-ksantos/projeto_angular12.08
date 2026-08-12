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

}
