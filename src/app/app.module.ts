import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomesPageComponent } from './homes/homes-page/homes-page.component';
import { SearchBarComponent } from './homes/search-bar/search-bar.component';
import { HomeCardComponent } from './homes/home-card/home-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesPageComponent,
    SearchBarComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
