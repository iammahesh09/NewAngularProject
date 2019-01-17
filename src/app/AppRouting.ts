import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherlistComponent } from './dashboard/weather/weatherlist/weatherlist.component';
import { WeatherDetailsComponent } from './dashboard/weather/weather-details/weather-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'weather', pathMatch: 'full' },
    { path: 'weather', component: WeatherlistComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }