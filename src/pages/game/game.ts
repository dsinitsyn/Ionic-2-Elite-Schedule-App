import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHome } from '../../pages/pages';
import { EliteApi } from '../../shared/shared';

/**
 * Generated class for the Game page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-game',
    templateUrl: 'game.html',
})
export class Game {
    game: any = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private eliteApi: EliteApi){
    }

    ionViewDidLoad(){
        this.game = this.navParams.data;
    }

    teamTapped(teamId){
        let tourneyData = this.eliteApi.getCurrentTourney();
        let team = tourneyData.teams.find(t => t.id === teamId);
        this.navCtrl.push(TeamHome, team);
    }
}
