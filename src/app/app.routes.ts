import { Routes } from '@angular/router';
import { Formulario } from './componentes/formulario/formulario';
import { ListaCadastros} from './componentes/lista-cadastros/lista-cadastros';
import { TelaInicio } from './componentes/tela-inicio/tela-inicio';
import { Menu } from './componentes/menu/menu';
import { Component } from '../../node_modules/@angular/compiler/types/compiler';
import { CadastroCorrida } from './componentes/cadastro-corrida/cadastro-corrida';


export const routes: Routes = [

    {path:'', redirectTo:'formulario', pathMatch:'full'},
    {path:'inicio', component:TelaInicio},
    {path:'formulario', component:Formulario},
    {path:'cadastros', component:ListaCadastros},
    {path:'formulario', component:Formulario},
    {path:'cadastro-corrida', component:CadastroCorrida}

];
