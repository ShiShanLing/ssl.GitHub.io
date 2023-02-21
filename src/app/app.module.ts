import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import {HttpClientModule} from "@angular/common/http";
import { CounterComponent } from './counter/counter.component';
import { MockComponent } from './mock/mock.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    CounterComponent,
    MockComponent,
    TodoListComponent,
    HeaderComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterLink,
        AppRoutingModule,
        MatDialogModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
