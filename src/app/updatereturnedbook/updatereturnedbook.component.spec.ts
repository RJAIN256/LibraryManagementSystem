import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereturnedbookComponent } from './updatereturnedbook.component';

describe('UpdatereturnedbookComponent', () => {
  let component: UpdatereturnedbookComponent;
  let fixture: ComponentFixture<UpdatereturnedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereturnedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereturnedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
