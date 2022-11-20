import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UrlFormComponent } from "../../shared/components/url-form/url-form.component";
import { FeaturesComponent } from "../../shared/components/features/features.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title h1', ()=>{
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').innerHTML).toBe(' More than just <br _ngcontent-a-c50=""> shorter links ')
  })

  it('should have body text', ()=>{
    const compiled = fixture.debugElement.nativeElement
    const text = `Build your brand's recognition and get detailed <br _ngcontent-a-c50=""> insights on how your links are performing`
    expect(compiled.querySelector('p').innerHTML).toBe(text)
  })

  it('should have image with correct source path', ()=>{
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('img').src).toBe('http://localhost:9876/assets/resources/images/illustration-working.svg')
  })

});
