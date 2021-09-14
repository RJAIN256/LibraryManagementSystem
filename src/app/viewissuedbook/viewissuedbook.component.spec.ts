import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewissuedbookComponent } from './viewissuedbook.component';

describe('ViewissuedbookComponent', () => {
  let component: ViewissuedbookComponent;
  let fixture: ComponentFixture<ViewissuedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewissuedbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewissuedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
