import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { CityListComponent } from './city/city-list/city-list.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { PersonelListComponent } from './personel/personel-list/personel-list.component';
import { PersonelDetailComponent } from './personel/personel-detail/personel-detail.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CityListComponent,
    CityDetailComponent,
    PersonelListComponent,
    PersonelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
