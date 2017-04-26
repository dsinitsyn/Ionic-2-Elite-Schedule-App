import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Teams } from '../pages';



@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class Tournaments {

    constructor(public navCtrl: NavController, public navParams: NavParams){
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad Tournaments');
    }

    itemTapped(){
        this.navCtrl.push(Teams);
    }

}
