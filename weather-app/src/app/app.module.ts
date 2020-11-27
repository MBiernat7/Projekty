import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './weather-app/toolbar/toolbar.component';
import { SelectionComponent } from './weather-app/selection/selection.component';
import { DisplayComponent } from './weather-app/display/display.component';
import { MaterialsModule } from './weather-app/materials/materials.module';
import { WeatherDataService } from './weather-app/service/weather-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SelectionComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
