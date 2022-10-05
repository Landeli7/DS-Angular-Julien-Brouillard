import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestoComponent } from './pages/resto/resto.component';
import { RestoTableComponent } from './components/resto-table/resto-table.component';
import { RestoFormComponent } from './components/resto-form/resto-form.component';
import { DetailsComponent } from './pages/details/details.component';
import { EvalFormComponent } from './components/eval-form/eval-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    RestoTableComponent,
    RestoFormComponent,
    DetailsComponent,
    EvalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
