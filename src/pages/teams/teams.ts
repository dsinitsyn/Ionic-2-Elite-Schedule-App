import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHome } from '../pages';
import { EliteApi } from '../../shared/shared';


@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html',
})
export class Teams {

    teams = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi){
    }

    ionViewDidLoad(){
        let selectedTourney = this.navParams.data;
        this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data =>{
            this.teams = data.teams;
        });
    }

    itemTapped($event, team){
        this.navCtrl.push(TeamHome, team);
    }

}
