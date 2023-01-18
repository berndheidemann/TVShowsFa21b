import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ShowsListComponent} from './shows-list/shows-list.component';
import {ShowsFormComponent} from './shows-form/shows-form.component';
import {FormsModule} from "@angular/forms";
import {ShowDetailComponent} from './show-detail/show-detail.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ShowsListComponent,
    ShowsFormComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
