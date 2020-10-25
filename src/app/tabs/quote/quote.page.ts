import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
  providers: [NavParams]
})
export class QuotePage {
 person: string;
  text: string;

  constructor(private modalController: ModalController,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text =this.navParams.get('text');
  }

  onClose(remove = false) {
    this.modalController.dismiss(remove);
  }
}
