import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialAsesorComponent } from './historial-asesor.component';

describe('HistorialAsesorComponent', () => {
  let component: HistorialAsesorComponent;
  let fixture: ComponentFixture<HistorialAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialAsesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
