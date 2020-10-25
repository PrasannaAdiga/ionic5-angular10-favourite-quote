import { Component, OnInit } from '@angular/core';
import { Quote } from "../data/quote";
import quotes from '../data/quotes';
import { ModalController } from '@ionic/angular';
import { QuotesPage } from '../quotes/quotes.page'

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  async showModal(quote: {category: string, quotes: Quote[], icon: string}) {
     const modal = await this.modalController.create({
       component: QuotesPage,
       componentProps: {
         'quoteGroup': quote
       }
     });
     return await modal.present();
  }

}
