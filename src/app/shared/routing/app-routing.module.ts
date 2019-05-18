import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from '../../components/sign-in/sign-in.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';
import {DashboardComponent} from '../../components/dashboard/dashboard.component';
import {ForgotPasswordComponent} from '../../components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from '../../components/verify-email/verify-email.component';
import {ContactMeComponent} from '../../components/contact-me/contact-me.component';
import {InnerGuard} from '../../core/guard/inner.guard';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: SignInComponent, canActivate: [InnerGuard]},
    {path: 'register', component: SignUpComponent, canActivate: [InnerGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'forgot', component: ForgotPasswordComponent, canActivate: [InnerGuard]},
    {path: 'verify', component: VerifyEmailComponent, canActivate: [InnerGuard]},
    {path: 'contact', component: ContactMeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
