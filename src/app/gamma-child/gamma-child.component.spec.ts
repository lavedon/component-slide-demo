import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammaChildComponent } from './gamma-child.component';

describe('GammaChildComponent', () => {
  let component: GammaChildComponent;
  let fixture: ComponentFixture<GammaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GammaChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GammaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
