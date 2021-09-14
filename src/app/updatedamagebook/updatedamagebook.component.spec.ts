import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedamagebookComponent } from './updatedamagebook.component';

describe('UpdatedamagebookComponent', () => {
  let component: UpdatedamagebookComponent;
  let fixture: ComponentFixture<UpdatedamagebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedamagebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedamagebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
