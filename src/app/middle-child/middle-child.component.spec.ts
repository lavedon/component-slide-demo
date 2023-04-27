import { ComponentFixture, TestBed } from '@angular/core/testing';

import { middleChildComponent } from './middle-child.component';

describe('middleChildComponent', () => {
  let component: middleChildComponent;
  let fixture: ComponentFixture<middleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ middleChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(middleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
