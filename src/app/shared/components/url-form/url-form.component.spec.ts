import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFormComponent } from './url-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UrlService} from "../../services/url.service";

describe('UrlFormComponent', () => {
  let component: UrlFormComponent;
  let fixture: ComponentFixture<UrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [UrlService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should have input field of type url', () => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('input').type).toBe('url')

  });

  it('form should have submit button', () => {
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('button').innerHTML).toBe(' Shorten it! ')
  })
});
