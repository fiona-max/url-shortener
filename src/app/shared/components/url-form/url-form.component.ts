import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UrlService} from "../../services/url.service";
import { Subscription } from 'rxjs';
import {ShortenLinkResponse} from "../../models/shorten-link-response";


@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  submitted = false;
  subscriptions: Subscription[] = [];
  urls: ShortenLinkResponse[] = []
  url: any


  constructor(private formBuilder: FormBuilder, private urlService: UrlService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        url: [
          '',
          [
            Validators.required
          ]
        ]})
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
//https://www.mys.ws
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
      this.urlService.createShortenLink(this.form.value.url).subscribe( res => {
        console.log(res)
        this.getUrl()
      })
    }
  }
  getUrl(){
    this.urlService.getLink(this.form.value.url).subscribe( res => {
      this.urls.push(res)
      // @ts-ignore
      localStorage.setItem('url', this.urls)
      localStorage.getItem('url')
      console.log(localStorage.getItem('url'))
      console.log(this.urls)
    })
  }

}
