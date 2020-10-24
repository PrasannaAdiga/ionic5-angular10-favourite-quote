import { Injectable } from '@angular/core';
import { Quote } from '../data/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    getFavorites() {
        return this.favoriteQuotes.slice();
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });

        return this.favoriteQuotes.splice(position, 1);
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl : Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}
