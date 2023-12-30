import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TabMenuModule} from "primeng/tabmenu";
import {HomeComponent} from './components/home/home.component';
import {DemoComponent} from './components/demo/demo.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {DropdownModule} from "primeng/dropdown";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {DemoService} from "./services/demo.service";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import { AddFieldComponent } from './components/add-field/add-field.component';
import {ValidationService} from "./services/validation.service";
import {InputNumberModule} from "primeng/inputnumber";
import {SidebarModule} from "primeng/sidebar";
import {MenuModule} from "primeng/menu";
import { TextInputComponent } from './components/text-input/text-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { FieldDefinitionTableComponent } from './components/field-definition-table/field-definition-table.component';
import { FieldTextInputComponent } from './components/field-text-input/field-text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    AddFieldComponent,
    TextInputComponent,
    NumberInputComponent,
    FieldDefinitionTableComponent,
    FieldTextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    NoopAnimationsModule,
    NgxJsonViewerModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    SidebarModule,
    MenuModule
  ],
  providers: [
    DemoService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
