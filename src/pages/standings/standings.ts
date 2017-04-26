import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-standings',
    templateUrl: 'standings.html',
})
export class Standings {

    constructor(public navCtrl: NavController, public navParams: NavParams){
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad Standings');
    }

}
