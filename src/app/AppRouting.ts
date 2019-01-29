import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherlistComponent } from './dashboard/weather/weatherlist/weatherlist.component';
import { WeatherDetailsComponent } from './dashboard/weather/weather-details/weather-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherSpecsComponent } from './dashboard/weather/weather-specs/weather-specs.component';
import { WeatherParentComponent } from './dashboard/weather/weather-parent/weather-parent.component';
import { ItemsListComponent } from './dashboard/itemsData/items-list/items-list.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NewsComponent } from './dashboard/Lifecycle/news/news.component';
import { NewsDetailsComponent } from './dashboard/Lifecycle/news-details/news-details.component';
import { IndiaComponent } from './dashboard/India/india.component';
import { IndiaStatesComponent } from './dashboard/India/india-states/india-states.component';
import { SmsComponent } from './dashboard/sms/sms.component';
import { FormsComponent } from './dashboard/forms/forms.component';
import { ModelDrivenFormComponent } from './dashboard/forms/ModelDrivenForm/ModelDrivenForm.component';
import { TemplateDrivenFormsComponent } from './dashboard/forms/TemplateDrivenForms/TemplateDrivenForms.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'weather', component: WeatherlistComponent },
    {
        path: 'weather/:id', component: WeatherDetailsComponent, children: [
            { path: '', redirectTo: 'consolidated_weather', pathMatch: 'full' },
            { path: 'consolidated_weather', component: WeatherSpecsComponent },
            { path: 'parent', component: WeatherParentComponent }
        ]
    },
    { path: 'itemslist', component: ItemsListComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },
    { path: 'india', component: IndiaComponent },
    { path: 'india/:code', component: IndiaStatesComponent },
    { path: 'sms', component: SmsComponent },
    {
        path: 'forms', component: FormsComponent, children: [
            { path: '', redirectTo: 'FormsComponent', pathMatch: 'full' },
            { path: 'ModelDrivenForms', component: ModelDrivenFormComponent },
            { path: 'TemplateDrivenForms', component: TemplateDrivenFormsComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }