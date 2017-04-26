import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-team-detail',
    templateUrl: 'team-detail.html',
})
export class TeamDetail {

    team: any;

    constructor(public navCtrl: NavController, public navParams: NavParams){
        this.team = this.navParams.data;
        console.log(this.navParams);
    }

    ionViewDidLoad(){
        console.log('ionViewDidLoad TeamDetail');
    }

    goHome(){
        this.navCtrl.parent.parent.popToRoot();
    }

}
