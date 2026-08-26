import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ClientesService } from '../../../service/cliente/clientes-service';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Cliente } from '../../../modelos/clientes';

describe('ClientesService', () => {
  let service: ClientesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ClientesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve calcular a idade', () => {
    const resultado = service.CalcularIdade('1976-05-05');
    expect(resultado).toBe(50);
  });

  it('deve retornar as pessoas', () => {
    const AtletaMock: Cliente[] = [
      {
        nome: 'nome 1',
        data: 'data 1',
        cpf: 0,
        sexo: 'sexo 1',
        cep: 'cep 1',
        uf: 'uf 1',
        cidade: 'cidade 1',
        bairro: 'bairro 1',
        id: 1,
      },
      {
        nome: 'nome 2',
        data: 'data 2',
        cpf: 76,
        sexo: 'sexo 2',
        cep: 'cep 2',
        uf: 'uf 2',
        cidade: 'cidade 2',
        bairro: 'bairro 2',
        id: 2,
      },
      {
        nome: 'nome 3',
        data: 'data 3',
        cpf: 98,
        sexo: 'sexo 3',
        cep: 'cep 3',
        uf: 'uf 3',
        cidade: 'cidade 3',
        bairro: 'bairro 3',
        id: 3,
      },
    ];

    service.listarAtletas().subscribe((cliente) => {
      expect(cliente.length).toBe(2);
      expect(cliente[0].nome).toBe('Joao');
      expect(cliente[1].nome).toBe('Maria');
    });
    const request = httpMock.expectOne('https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas');

    expect(request.request.method).toBe('GET');
    request.flush(AtletaMock);
  });

  it('deve deletar', () => {
    service.excluirAtleta(1).subscribe();

    const request = httpMock.expectOne(
      'https://6a835e4dcb486d243403a5ca.mockapi.io/pessoas/'
    );

    expect(request.request.method).toBe('DELETE');

    request.flush(null);

  });
  
});
