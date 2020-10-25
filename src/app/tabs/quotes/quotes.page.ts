import { Component, Input } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';

import { Quote } from '../data/quote';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage {
  @Input() quoteGroup: {category: string, quotes: Quote[], icon: string}[];

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private modalController: ModalController,
    private quotesService: QuotesService)  {
  }

  async onAddToFavorites(selectedQuote: Quote) {
    const alert = await this.alertCtrl.create({
      header: 'Add Quote',
      message: 'Are you sure you want to favorite this quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          cssClass: 'secondary',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        },
        {
          text: 'No, I changed my mind!',
          cssClass: 'danger',
          role: 'cancel',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    await alert.present();
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
