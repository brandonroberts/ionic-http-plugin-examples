import { Component, Input, OnInit } from '@angular/core';
import { Quote } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {
  @Input() quote: Quote;

}
