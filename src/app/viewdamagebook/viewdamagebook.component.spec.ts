import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdamagebookComponent } from './viewdamagebook.component';

describe('ViewdamagebookComponent', () => {
  let component: ViewdamagebookComponent;
  let fixture: ComponentFixture<ViewdamagebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdamagebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdamagebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
