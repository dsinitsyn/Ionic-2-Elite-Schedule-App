import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Tournaments } from '../pages';

/**
 * Generated class for the MyTeams page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html',
})
export class MyTeams {

    constructor(public navCtrl: NavController, public navParams: NavParams){

    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad MyTeams');
    }

    goToTournaments(){
        this.navCtrl.push(Tournaments);
    }

}
