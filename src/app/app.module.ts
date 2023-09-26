import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelebrityListComponent } from './components/celebrity-list/celebrity-list.component';
import { CelebrityComponent } from './components/celebrity/celebrity.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, CelebrityListComponent, CelebrityComponent, PostComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
