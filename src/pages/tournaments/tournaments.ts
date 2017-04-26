import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Teams } from '../pages';

import { EliteApi } from '../../shared/shared';


@Component({
    selector: 'page-tournaments',
    templateUrl: 'tournaments.html',
})
export class Tournaments {

    tournaments: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private eliteApi: EliteApi,
                private loadingCtrl: LoadingController){
    }

    ionViewDidLoad(){

        let loader = this.loadingCtrl.create({
            content: 'Getting tournaments...',
            spinner: 'dots'
        });

        loader.present().then(() => {
            this.eliteApi.getTournaments().then(data => {
                this.tournaments = data;
                loader.dismiss();
            });
        });
    }

    itemTapped($event, tourney){
        this.navCtrl.push(Teams, tourney);
    }

}
