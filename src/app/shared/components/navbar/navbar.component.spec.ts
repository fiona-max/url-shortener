import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have shortly logo', ()=>{
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('img'))
  })

  it('should have 3 links', ()=>{
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelectorAll('a').length).toBeGreaterThanOrEqual(3)
  })
});
