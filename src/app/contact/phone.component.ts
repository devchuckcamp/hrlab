import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'contact-phone',
    templateUrl: './phone.component.html',
    styleUrls:['../app.component.scss']
})
export class ContactPhoneComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        
    }
}
