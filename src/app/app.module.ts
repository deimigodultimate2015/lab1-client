import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
