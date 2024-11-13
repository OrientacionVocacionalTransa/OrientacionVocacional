import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteArribaComponent } from './parte-arriba.component';

describe('ParteArribaComponent', () => {
  let component: ParteArribaComponent;
  let fixture: ComponentFixture<ParteArribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteArribaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
