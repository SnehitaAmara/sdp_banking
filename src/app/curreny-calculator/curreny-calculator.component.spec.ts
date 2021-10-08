import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenyCalculatorComponent } from './curreny-calculator.component';

describe('CurrenyCalculatorComponent', () => {
  let component: CurrenyCalculatorComponent;
  let fixture: ComponentFixture<CurrenyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
