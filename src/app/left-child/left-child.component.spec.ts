import { ComponentFixture, TestBed } from '@angular/core/testing';

import { leftChildComponent } from './left-child.component';

describe('leftChildComponent', () => {
  let component: leftChildComponent;
  let fixture: ComponentFixture<leftChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ leftChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(leftChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
