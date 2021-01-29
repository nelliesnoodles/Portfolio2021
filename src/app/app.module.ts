import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './nav/nav.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WordPressComponent } from './word-press/word-press.component';
import { WritingComponent } from './writing/writing.component';
import { ChinguComponent } from './chingu/chingu.component';
import { BloggerComponent } from './blogger/blogger.component';
import { PythonComponent } from './python/python.component';

// Angular/material: https://gist.github.com/pimatco/d5b1891feb90b60ca4681011b6513873
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GithubComponent,
    HomeComponent,
    NotfoundComponent,
    WordPressComponent,
    WritingComponent,
    ChinguComponent,
    BloggerComponent,
    PythonComponent,
    AboutComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
