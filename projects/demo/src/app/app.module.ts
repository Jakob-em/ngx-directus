import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxDirectusModule} from 'ngx-directus/ngx-directus.module';
import {HTTP_INTERCEPTORS, HttpHandler, HttpRequest} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDirectusModule.forRoot({
        url: 'http://localhost:8055',
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useValue: {
        intercept: (req: HttpRequest<any>, next: HttpHandler) => {
          console.log('interceptor called');
          return next.handle(req);
        }
      }, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
