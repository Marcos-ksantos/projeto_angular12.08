import { Injectable } from "@angular/core";
import { Corridas } from "../modelos/corridas";

@Injectable({
    providedIn:'root',
})

export class CorridasService {
    private corrida : Corridas [] = []

addCorrida(corrida : Corridas){
 corrida.id = this.corrida.length + 1

this.corrida.push (corrida)
}

ListCorrida(): Corridas[] {
return this.corrida
}

}
