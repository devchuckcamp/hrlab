import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToasterModule,ToasterContainerComponent, ToasterService} from 'angular2-toaster';
import { FlexLayoutModule } from "@angular/flex-layout";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { CarouselModule,CarouselComponent,SlideComponent,CarouselConfig } from 'angular-bootstrap-md/carousel';


//Pages
import { HomeComponent } from './home/home.component';
import { ContactEmailComponent } from './contact/email.component';
import { ContactPhoneComponent } from './contact/phone.component';
import { WorkComponent } from './work/work.component';
import { WorkInfoComponent } from './work/workinfo.component';

import 'hammerjs';
import { 
  MatIconModule, 
  MatButtonModule,  
  MatMenuModule, 
  MatCheckboxModule, 
  MatButtonToggleModule, 
  MatToolbarModule,
  MatAutocompleteModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactEmailComponent,
    ContactPhoneComponent,
    WorkComponent,
    WorkInfoComponent,
    // CarouselComponent,SlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,  
    MatMenuModule, 
    MatCheckboxModule, 
    MatButtonToggleModule, 
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ToasterModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    // CarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
