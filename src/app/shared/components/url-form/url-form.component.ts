import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UrlService} from "../../services/url.service";
import { Subscription } from 'rxjs';
import {ShortenLinkResponse} from "../../models/shorten-link-response";
import {ClipboardService} from "ngx-clipboard";



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
  urlsArray: ShortenLinkResponse[] = []


  constructor(private formBuilder: FormBuilder,
              private urlService: UrlService,
              private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
    if(localStorage.getItem("url")){
      this.urlsArray = JSON.parse(<string>localStorage.getItem("url"))
    }
    this.form = this.formBuilder.group(
      {url: ['', [Validators.required]]}
      )
  }
  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    else{
     const urlSub = this.urlService.createShortenLink(this.form.value.url).subscribe( res => {
        this.getUrl()
     })
      this.subscriptions.push(urlSub)
    }
  }
  getUrl(){
    const sub = this.urlService.getLink(this.form.value.url).subscribe( res => {
      this.urlsArray.push(res)
      localStorage.setItem('url', JSON.stringify(this.urlsArray));
    })
    this.subscriptions.push(sub);
  }

  copyText(element: any, text: string) {
    this.clipboardApi.copyFromContent(text)
    element.textContent = "Copied!";
    element.style.background = "indigo"
  }

}
