import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UrlService} from "./shared/services/url.service";
import {HttpClient} from "@angular/common/http";
import {FeaturesComponent} from "./shared/components/features/features.component";
import {UrlFormComponent} from "./shared/components/url-form/url-form.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [UrlService, HttpClient],
      declarations: [
        AppComponent,
        FeaturesComponent,
        UrlFormComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shortly'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shortly');
  });

});
