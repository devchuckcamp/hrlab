import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'contact-email',
    templateUrl: './email.component.html',
    styleUrls:['../app.component.scss']
})
export class ContactEmailComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private _formBuilder: FormBuilder
        ) { }
    
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
