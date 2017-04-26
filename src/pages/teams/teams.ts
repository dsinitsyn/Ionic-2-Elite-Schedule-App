import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHome } from '../pages';


@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html',
})
export class Teams {

    teams = [
        {id: 1, name: 'HC Elite'},
        {id: 2, name: 'Team Takeocer'},
        {id: 3, name: 'Liverpool'}
    ]

    constructor(public navCtrl: NavController, public navParams: NavParams){
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad Teams');
    }

    itemTapped($event, team){
        this.navCtrl.push(TeamHome, team);
    }

}
