import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnbookComponent } from './addreturnbook.component';

describe('AddreturnbookComponent', () => {
  let component: AddreturnbookComponent;
  let fixture: ComponentFixture<AddreturnbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreturnbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
