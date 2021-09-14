import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissuebookComponent } from './addissuebook.component';

describe('AddissuebookComponent', () => {
  let component: AddissuebookComponent;
  let fixture: ComponentFixture<AddissuebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddissuebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddissuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
