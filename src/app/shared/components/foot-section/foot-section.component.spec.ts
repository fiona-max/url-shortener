import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootSectionComponent } from './foot-section.component';

describe('FootSectionComponent', () => {
  let component: FootSectionComponent;
  let fixture: ComponentFixture<FootSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
