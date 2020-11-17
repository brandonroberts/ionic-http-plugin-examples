import { Injectable } from "@angular/core";
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';

export interface Quote {
  quote: string;
  author: string;
  season: string;
  episode: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  getQuotes() {
    const { Http } = Plugins;
    const start = Math.ceil(Math.random() * 500);

    return from(Http.request({
      method: 'GET',
      url: 'http://localhost:3000/quotes'
    })).pipe(map((response: { data: Quote[] }) => response.data.slice(start, start + 10)));
  }
}
