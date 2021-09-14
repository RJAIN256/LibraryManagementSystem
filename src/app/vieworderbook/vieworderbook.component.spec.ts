import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderbookComponent } from './vieworderbook.component';

describe('VieworderbookComponent', () => {
  let component: VieworderbookComponent;
  let fixture: ComponentFixture<VieworderbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworderbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
