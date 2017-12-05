import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'my-work',
    templateUrl: './work.component.html',
    styleUrls:['../app.component.scss']
})
export class WorkComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    xsDistribution = 100 / 1;
    smDistribution = 100 / 2.08;
    mdDistribution = 100 / 4.1;
    lgDistribution = 100 / 4.1;
    works = [
        {
            
            id:1,
            name:"Rose E-Prescription",
            description:"Appointment ERM",
            url:'https://www.erx.rose-pharmacy.com',
        },
        {
            id:2,
            name:"Ohabart",
            description:"Job Archive",
            url:'http://www.ohabart.com',
        },
        {
            id:3,
            name:"Rose E-Prescription",
            description:"Search Archive",
            url:'https://www.erx.rose-pharmacy.com',
        },
        {
            id:4,
            name:"Ohabart",
            description:"Job Archive",
            url:'http://www.ohabart.com',
        },
        {
            id:5,
            name:"Rose E-Prescription",
            description:"Appointment ERM",
            url:'https://www.erx.rose-pharmacy.com',
        },
        {
            id:6,
            name:"Rose E-Prescription",
            description:"Appointment ERM",
            url:'https://www.erx.rose-pharmacy.com',
        }
    ];

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        
    }
}
