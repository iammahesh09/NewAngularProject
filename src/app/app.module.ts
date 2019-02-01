import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DemoComponent } from './dashboard/home/demo/demo.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { ModelDrivenFormComponent } from './dashboard/forms/ModelDrivenForm/ModelDrivenForm.component';
import { TemplateDrivenFormsComponent } from './dashboard/forms/TemplateDrivenForms/TemplateDrivenForms.component';
import { GlobalErrorHandler } from './dashboard/services/global.errorHandler';
import { RxjsComponent } from './dashboard/rxjs/rxjs.component';


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
    SmsComponent,
    DemoComponent,
    FormsComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    ReactiveFormsModule

  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
