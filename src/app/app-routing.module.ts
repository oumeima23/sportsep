import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './matches-table/matches-table.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { TeamsTableComponent } from './teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component :LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"signupAdmin",component:SignupComponent},
  {path:"matchForm",component:MatchFormComponent},
  {path:"playerForm",component:PlayerFormComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"editTeam",component:EditTeamComponent},
  {path:"allMatches",component:MatchesComponent},
  {path:"allMatches/search",component:MatchesComponent},
  {path:"allPlayer",component:PlayerComponent},
  {path:"allTeams",component:TeamsComponent},
  {path:"admin",component:AdminComponent},
  {path:"matchesTable",component:MatchesTableComponent},
  {path:"playersTable",component:PlayersTableComponent},
  {path:"teamsTable",component:TeamsTableComponent},
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"addMatch",component:MatchFormComponent},
  {path:"editMatch/:id",component:MatchFormComponent},
  {path:"searchMatch",component:SearchMatchComponent},
  {path:"addTeam",component:AddTeamComponent},
  {path:"editTeam/:id",component:AddTeamComponent},
  {path:"addStadium",component:AddStaduimComponent},
  {path:"editPlayer/:id",component:PlayerFormComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"weather",component:WeatherComponent},

 
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
