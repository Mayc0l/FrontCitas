import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLcitaComponent } from './lista-lcita.component';

describe('ListaLcitaComponent', () => {
  let component: ListaLcitaComponent;
  let fixture: ComponentFixture<ListaLcitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLcitaComponent]
    });
    fixture = TestBed.createComponent(ListaLcitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
