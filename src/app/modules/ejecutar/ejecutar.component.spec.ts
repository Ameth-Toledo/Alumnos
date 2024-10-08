import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutarComponent } from './ejecutar.component';

describe('EjecutarComponent', () => {
  let component: EjecutarComponent;
  let fixture: ComponentFixture<EjecutarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjecutarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjecutarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
