import { BrowserModule } from '@angular/platform-browser';
import { NgModule,enableProdMode } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
