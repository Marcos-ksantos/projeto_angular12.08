import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ListaCadastros } from './lista-cadastros';
import { ClientesService } from '../../../service/cliente/clientes-service';

describe('ListaCadastros,ClientesService', () => {
  let component: ListaCadastros;
  let service: ClientesService;
  let fixture: ComponentFixture<ListaCadastros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCadastros, ClientesService, provideHttpClient],
    }).compileComponents();

    service = TestBed.inject(ClientesService);
    fixture = TestBed.createComponent(ListaCadastros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve calcular a idade', () => {
    const resultado = service.CalcularIdade('1976-05-05');
    expect(resultado).toBe(50);
  });
});
