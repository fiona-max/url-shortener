import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ShortenLinkResponse} from "../models/shorten-link-response";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getLink(shortenedLink: string): Observable<ShortenLinkResponse> {
    return this.http.get<ShortenLinkResponse>(
      `https://api.shrtco.de/v2/shorten?url=${shortenedLink}`
    );
  }

  createShortenLink(shortenedLink: string){
    return this.http.post(
      `https://api.shrtco.de/v2/shorten?url=${shortenedLink}`,
      shortenedLink
    )
  }
}
