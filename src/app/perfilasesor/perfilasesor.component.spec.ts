import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilasesorComponent } from './perfilasesor.component';

describe('PerfilasesorComponent', () => {
  let component: PerfilasesorComponent;
  let fixture: ComponentFixture<PerfilasesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilasesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilasesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
