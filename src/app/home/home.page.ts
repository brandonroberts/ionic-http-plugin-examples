import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Quote, QuotesService } from '../quote/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quotes$: Observable<Quote[]>;

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.getQuotes();
  }

  getQuotes($event?: any) {
    this.quotes$ = this.quotesService.getQuotes().pipe(tap(() => {
      if ($event) {
        $event.target.complete();
      }
    }));
  }

  refresh($event: any) {
    this.getQuotes($event);
  }
}
