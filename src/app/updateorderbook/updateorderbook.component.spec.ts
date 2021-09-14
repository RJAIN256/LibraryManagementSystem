import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorderbookComponent } from './updateorderbook.component';

describe('UpdateorderbookComponent', () => {
  let component: UpdateorderbookComponent;
  let fixture: ComponentFixture<UpdateorderbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateorderbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorderbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
