import { Component, OnInit } from '@angular/core';
import { Quote } from "../data/quote";
import quotes from '../data/quotes';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  quotesPage: any = 'QuotesPage';
  ngOnInit() {
    this.quoteCollection = quotes;
  }

}
