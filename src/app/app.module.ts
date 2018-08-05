import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViralNewsComponent } from './viral-news/viral-news.component';
import { IndianRailwayComponent } from './indian-railway/indian-railway.component';
import { IndianContactComponent } from './indian-contact/indian-contact.component';
import { ViralService } from './viral-news/viral.service';
import { LiveTrainComponent } from './indian-railway/live-train/live-train.component';
import { PnrStatusComponent } from './indian-railway/pnr-status/pnr-status.component';
import { TrainRouteComponent } from './indian-railway/train-route/train-route.component';
import { SeatAvailComponent } from './indian-railway/seat-avail/seat-avail.component';
import { TrainBetweenComponent } from './indian-railway/train-between/train-between.component';
import { FareEnquiryComponent } from './indian-railway/fare-enquiry/fare-enquiry.component';
import { TrainArrivalComponent } from './indian-railway/train-arrival/train-arrival.component';
import { TrainCancelComponent } from './indian-railway/train-cancel/train-cancel.component';

const appRoutes:Routes=[
  { path :'',component:ViralNewsComponent },
  { path :'viral',component:ViralNewsComponent },
  { 
    path :'railways',component:IndianRailwayComponent,
    children:[
      { path:'live_train',component:LiveTrainComponent},
      { path:'pnr_status',component:PnrStatusComponent},
      { path:'train_route',component:TrainRouteComponent},
      { path:'seat_avail',component:SeatAvailComponent},
      { path:'train_between_stations',component:TrainBetweenComponent},
      { path:'fare_enquiry',component:FareEnquiryComponent},
      { path:'train_arrival',component:TrainArrivalComponent},
      { path:'canceled_train',component:TrainCancelComponent},
      { path:'',component:LiveTrainComponent}
    ]
  },
  { path :'contact',component:IndianContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViralNewsComponent,
    IndianRailwayComponent,
    IndianContactComponent,
    LiveTrainComponent,
    PnrStatusComponent,
    TrainRouteComponent,
    SeatAvailComponent,
    TrainBetweenComponent,
    FareEnquiryComponent,
    TrainArrivalComponent,
    TrainCancelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule
  ],
  providers: [ViralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
