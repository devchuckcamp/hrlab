import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ToasterModule, ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
// import { CarouselModule,CarouselComponent,SlideComponent } from 'angular-bootstrap-md/carousel';
import {PlatformLocation } from '@angular/common';

// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['../app.component.scss']
})
export class HomeComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    meImg = "";
    // Image Carousel
    public slides = [
        {
            image:'../assets/img/ws/qualified-programmer-nobg.png',
        },
        {
            image:'../assets/img/ws/programming-life-bg.png',
        },
        {
            image:'../assets/img/ws/deadline-argument-bg.png',
        },
        {
            image:'../assets/img/ws/timing-can-be-a-factor.png',
        },
     ];

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private platformLocation:PlatformLocation
        ) { 
            this.meImg = (platformLocation as any).location.href + 'assets/img/me.jpg';
        }

    ngOnInit() { 
        
    }
}
