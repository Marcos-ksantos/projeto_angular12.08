import { Injectable } from "@angular/core";
import { Corridas } from "../modelos/corridas";
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root',
})

export class CorridasService {
    
    /*constructor(private http:HttpClient){ }
   
listarCorrida():Observable
   
   
}*/
    private corrida : Corridas [] = []

addCorrida(corrida : Corridas){
 corrida.id = this.corrida.length + 1

this.corrida.push (corrida)
}

ListCorrida(): Corridas[] {
return this.corrida
}

}