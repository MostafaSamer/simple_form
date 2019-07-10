import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { ShareDataService } from './share-data.service'

import { AppComponent } from './app.component';
import { FormComponent } from './user/form/form.component';
import { TableComponent } from './user/form/table/table.component';
import { SubmitedComponent } from './user/form/submited/submited.component';
import { ListUserComponent } from './user/form/list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    SubmitedComponent,
    ListUserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: '',
            redirectTo: '/form',
            pathMatch: 'full'
        },
        {
            path: 'form',
            component: FormComponent
        },
        {
            path: 'submited',
            component: SubmitedComponent
        },
        {
            path: 'list',
            component: ListUserComponent
        }
    ])
  ],
  providers: [ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
