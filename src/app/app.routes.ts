import { Routes } from '@angular/router';
import { Formulario } from './componentes/atleta/formulario/formulario';
import { ListaCadastros } from './componentes/atleta/lista-cadastros/lista-cadastros';
import { TelaInicio } from './componentes/base-app/tela-inicio/tela-inicio';
import { Menu } from './componentes/base-app/menu/menu';
import { Component } from '../../node_modules/@angular/compiler/types/compiler';
import { CadastroCorrida } from './componentes/corrida/cadastro-corrida/cadastro-corrida';
import { ListaCorridas } from './componentes/corrida/lista-corridas/lista-corridas';
import { IncricaoCorrida } from './componentes/corrida/incricao-corrida/incricao-corrida';

export const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario/:id', component: Formulario },
  { path: 'formulario', component: Formulario },
  { path: 'cadastro-corrida/:id', component: CadastroCorrida },
  { path: 'cadastro-corrida', component: CadastroCorrida },
  { path: 'lista-corrida', component: ListaCorridas },
  { path: 'inicio', component: TelaInicio },
  { path: 'cadastros', component: ListaCadastros },
  { path: 'inscricoes', component: IncricaoCorrida },
];
