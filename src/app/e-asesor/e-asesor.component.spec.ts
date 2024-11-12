import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAsesorComponent } from './e-asesor.component';

describe('EAsesorComponent', () => {
  let component: EAsesorComponent;
  let fixture: ComponentFixture<EAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EAsesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
