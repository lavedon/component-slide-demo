import { ComponentFixture, TestBed } from '@angular/core/testing';

import { rightChildComponent } from './right-child.component';

describe('rightChildComponent', () => {
  let component: rightChildComponent;
  let fixture: ComponentFixture<rightChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ rightChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(rightChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
