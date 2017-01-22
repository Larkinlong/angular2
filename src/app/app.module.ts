import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent} from './entry';
import { TodoComponent} from './app.component';
import { TodoStore } from './store';
import { heroes } from './store';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TodoStore,heroes],
  bootstrap: [AppComponent]
})
export class AppModule { }
