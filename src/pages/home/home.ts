import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title:string='瞭望阅读器';
  content:any=[{},{},{}];
  constructor(public navCtrl: NavController) {

  }

}
