import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { WeatherlistComponent } from './dashboard/weather/weatherlist/weatherlist.component';
import { WeatherDetailsComponent } from './dashboard/weather/weather-details/weather-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './AppRouting';
import { MenuComponent } from './menu/menu.component';
import { WeatherSpecsComponent } from './dashboard/weather/weather-specs/weather-specs.component';
import { WeatherParentComponent } from './dashboard/weather/weather-parent/weather-parent.component';
import { ItemsListComponent } from './dashboard/itemsData/items-list/items-list.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NewsDetailsComponent } from './dashboard/Lifecycle/news-details/news-details.component';
import { NewsComponent } from './dashboard/Lifecycle/news/news.component';
import { IndiaComponent } from './dashboard/India/india.component';
import { IndiaStatesComponent } from './dashboard/India/india-states/india-states.component';
import { TeacherComponent } from './dashboard/sms/teacher/teacher.component';
import { StudentComponent } from './dashboard/sms/student/student.component';
import { SmsComponent } from './dashboard/sms/sms.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherlistComponent,
    WeatherDetailsComponent,
    PageNotFoundComponent,
    MenuComponent,
    WeatherSpecsComponent,
    WeatherParentComponent,
    ItemsListComponent,
    HomeComponent,
    NewsDetailsComponent,
    NewsComponent,
    IndiaComponent,
    IndiaStatesComponent,
    TeacherComponent,
    StudentComponent,
    SmsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    NgxDatatableModule,
    NgxSpinnerModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
