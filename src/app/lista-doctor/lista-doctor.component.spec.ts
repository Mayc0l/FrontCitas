import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDoctorComponent } from './lista-doctor.component';

describe('ListaDoctorComponent', () => {
  let component: ListaDoctorComponent;
  let fixture: ComponentFixture<ListaDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDoctorComponent]
    });
    fixture = TestBed.createComponent(ListaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
