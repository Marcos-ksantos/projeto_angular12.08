import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorridas } from './lista-corridas';

describe('ListaCorridas', () => {
  let component: ListaCorridas;
  let fixture: ComponentFixture<ListaCorridas>;

  beforeEach( () => {
 TestBed.configureTestingModule({
      imports: [ListaCorridas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCorridas);
    component = fixture.componentInstance;
fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
