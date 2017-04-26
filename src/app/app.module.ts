import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Game, MyTeams, TeamDetail, Tournaments, Teams, Standings, TeamHome } from '../pages/pages';

import { EliteApi } from '../shared/shared';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        Game,
        MyTeams,
        TeamDetail,
        Tournaments,
        Teams,
        Standings,
        TeamHome
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Game,
        MyTeams,
        TeamDetail,
        Tournaments,
        Teams,
        Standings,
        TeamHome
    ],
    providers: [
        HttpModule,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        EliteApi
    ]
})
export class AppModule {
}
