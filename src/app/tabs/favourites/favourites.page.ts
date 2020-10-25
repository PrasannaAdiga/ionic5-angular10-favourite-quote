import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuotesService } from '../services/quotes.service';
import { Quote } from '../data/quote';
import { SettingsService } from '../services/settings.service';
import { QuotePage } from '../quote/quote.page'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit{
    favoriteQuotes: Quote[];

    constructor(private quotesService: QuotesService,
                private modalController: ModalController,
                private settingsService: SettingsService) {
    }

    ngOnInit() {
      this.favoriteQuotes = this.quotesService.getFavorites();
    }

    async onViewQuote(quote: Quote) {
      const modal = await this.modalController.create({
         component: QuotePage,
         componentProps: {
           'quote': quote
         }
      });
      await modal.present();
      const data = await modal.onDidDismiss();
      if(data) {
        this.quotesService.removeQuoteFromFavorites(quote);
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
      this.favoriteQuotes.splice(position, 1);
      }
    }

    getBackground() {
      return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }

    isAltBackground() {
      return this.settingsService.isAltBackground();
    }

    isEmptyFavoriteQuotes(): boolean {
       return this.favoriteQuotes.length == 0;
    }

}
