import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ScatterDiagramComponent } from './scatter-diagram/scatter-diagram.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PiechartComponent,
    ScatterDiagramComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
