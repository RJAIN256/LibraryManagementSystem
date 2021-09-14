import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddamagebookComponent } from './adddamagebook.component';

describe('AdddamagebookComponent', () => {
  let component: AdddamagebookComponent;
  let fixture: ComponentFixture<AdddamagebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddamagebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddamagebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
