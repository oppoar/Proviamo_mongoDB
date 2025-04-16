import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankComponentComponent } from './frank-component.component';

describe('FrankComponentComponent', () => {
  let component: FrankComponentComponent;
  let fixture: ComponentFixture<FrankComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrankComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
