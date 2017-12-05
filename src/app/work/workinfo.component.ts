import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Work } from '../model';


// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'my-work-info',
    templateUrl: './workinfo.component.html',
    styleUrls:['../app.component.scss']
})
export class WorkInfoComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    xsDistribution = 100 / 1;
    smDistribution = 100 / 2;
    mdDistribution = 100 / 4.18;
    lgDistribution = 100 / 6;
    work: Work;

    id:number;
    navigated:boolean;

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                this.navigated = true;
                this.id = params['id'];
                console.log(this.id);

                this.work = {
                    id:1,
                    name:"Rose E-Prescription",
                    description:"Appointment ERM",
                    url:'https://www.erx.rose-pharmacy.com',
                };

                // this.getDoctorCredential(params['id']);

                // this.doctorService.getDoctor(params['id']).subscribe(doctor => {
                //     this.doctor = doctor;
                //     this.doctorID = doctor.id;
                    
                //     this.doctorName = doctor.fname + ' ' + doctor.lname;
                //     //console.log(this.doctor);
                // }
                //);

            }
        });
    }
}
