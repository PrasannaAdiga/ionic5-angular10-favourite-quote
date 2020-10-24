import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QuotesService } from '../services/quotes.service';
import { Quote } from '../data/quote';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage {
  favoriteQuotes: Quote[];
    quotePage: any = 'QuotePage';

    constructor(private quotesService: QuotesService,
                private modalController: ModalController,
                private settingsService: SettingsService) {
    }

    ionViewWillEnter() {
      this.favoriteQuotes = this.quotesService.getFavorites();
    }

  /**  onViewQuote(quote: Quote) {
      const modal = this.modalController.create(this.quotePage, quote);
      modal.present();
      modal.onDidDismiss((remove: boolean) => {
        if(remove) {
          this.quotesService.removeQuoteFromFavorites(quote);

          const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });

          this.favoriteQuotes.splice(position, 1);
        }
      });
    }*/

    getBackground() {
      return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }

    isAltBackground() {
      return this.settingsService.isAltBackground();
    }

}
