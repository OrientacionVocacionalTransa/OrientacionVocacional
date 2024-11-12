import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEstudianteComponent } from './e-estudiante.component';

describe('EEstudianteComponent', () => {
  let component: EEstudianteComponent;
  let fixture: ComponentFixture<EEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
