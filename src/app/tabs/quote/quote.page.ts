import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Quote } from '../data/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss']
})
export class QuotePage {
  @Input() quote: Quote;

  constructor(private modalController: ModalController) {
  }

  onClose(remove = false) {
    this.modalController.dismiss(remove);
  }

}
