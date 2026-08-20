import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncricaoCorrida } from './incricao-corrida';

describe('IncricaoCorrida', () => {
  let component: IncricaoCorrida;
  let fixture: ComponentFixture<IncricaoCorrida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncricaoCorrida],
    }).compileComponents();

    fixture = TestBed.createComponent(IncricaoCorrida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
