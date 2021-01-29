import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './github/github.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ChinguComponent } from './chingu/chingu.component';
import { WordPressComponent } from './word-press/word-press.component';
import { WritingComponent } from './writing/writing.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'github', component: GithubComponent },
      { path: 'chingu', component: ChinguComponent },
      { path: 'wordpress', component: WordPressComponent },
      { path: 'writing', component: WritingComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
