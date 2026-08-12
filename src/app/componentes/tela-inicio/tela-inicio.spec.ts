import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicio } from './tela-inicio';

describe('TelaInicio', () => {
  let component: TelaInicio;
  let fixture: ComponentFixture<TelaInicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInicio],
    }).compileComponents();

    fixture = TestBed.createComponent(TelaInicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
