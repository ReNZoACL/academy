import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberViewsPipe } from './shared/pipes/number-views.pipe';
import { ImgErrorDirective } from './shared/directives/img-error.directive';
import { GlobalModule } from './globals/global.module';

@NgModule({
  declarations: [
    AppComponent,
    NumberViewsPipe,
    ImgErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
