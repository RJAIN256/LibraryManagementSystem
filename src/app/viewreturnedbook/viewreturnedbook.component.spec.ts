import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreturnedbookComponent } from './viewreturnedbook.component';

describe('ViewreturnedbookComponent', () => {
  let component: ViewreturnedbookComponent;
  let fixture: ComponentFixture<ViewreturnedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreturnedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreturnedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
