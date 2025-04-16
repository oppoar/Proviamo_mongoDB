import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmandoComponentComponent } from './armando-component.component';

describe('ArmandoComponentComponent', () => {
  let component: ArmandoComponentComponent;
  let fixture: ComponentFixture<ArmandoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmandoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmandoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
