import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaChildComponent } from './beta-child.component';

describe('BetaChildComponent', () => {
  let component: BetaChildComponent;
  let fixture: ComponentFixture<BetaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
