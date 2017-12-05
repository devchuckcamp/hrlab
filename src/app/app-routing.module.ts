import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactEmailComponent } from './contact/email.component';
import { ContactPhoneComponent } from './contact/phone.component';
import { WorkComponent } from './work/work.component';
import { WorkInfoComponent } from './work/workinfo.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact-email', component: ContactEmailComponent },
    { path: 'contact-phone', component: ContactPhoneComponent },
    { path: 'work', component: WorkComponent },
    { path: 'work/:id', component: WorkInfoComponent },
    // { path: '', loadChildren: './home/home.module#HomeModule' },
    // {
    //     path: 'dashboard',
    //     loadChildren: './layout/layout.module#LayoutModule',
    //     canActivate: [AuthGuard]
    // },
    // { path: 'home', loadChildren: './home/home.module#HomeModule' },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    // // { path: 'dashboard', loadChildren: './layout/dashboard/dashboard.module#DashboardModule' },
    // // { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    // // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
