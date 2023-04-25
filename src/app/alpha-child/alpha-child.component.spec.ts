import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaChildComponent } from './alpha-child.component';

describe('AlphaChildComponent', () => {
  let component: AlphaChildComponent;
  let fixture: ComponentFixture<AlphaChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphaChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
