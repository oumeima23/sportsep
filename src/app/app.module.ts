import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


import { ResultsComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingComponent } from './components/standing/standing.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ArticleComponent } from './components/article/article.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { MatchesTableComponent } from './matches-table/matches-table.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { TeamsTableComponent } from './teams-table/teams-table.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { CustomFilterPipe } from './components/custom-filter.pipe';
import { PipeComponent } from './components/pipe/pipe.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchMatchByScoreComponent } from './components/search-match-by-score/search-match-by-score.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,

    ResultsComponent,
    NewsComponent,
    StandingComponent,
    BlogComponent,
    AddTeamComponent,
    ArticleComponent,
    CupEventComponent,
    EditTeamComponent,
    InfoComponent,
    LoginComponent,
    SignupComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AdminComponent,
    MatchesComponent,
    PlayerComponent,
    TeamsComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    BannerComponent,
    MatchInfoComponent,
    SearchMatchComponent,
    CustomFilterPipe,
    PipeComponent,
    AddStaduimComponent,
    TeamInfoComponent,
    SearchMatchByScoreComponent,
    PlayerInfoComponent,
    ProfileComponent,
    WeatherComponent,
 
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


