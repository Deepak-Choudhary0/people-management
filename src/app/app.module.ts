import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPeopleComponent } from './list-people/list-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { DeletePeopleComponent } from './delete-people/delete-people.component';
import { CreatePeopleComponent } from './create-people/create-people.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChangeComponent } from './change/change.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    EditPeopleComponent,
    DeletePeopleComponent,
    CreatePeopleComponent,
    ChangeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
