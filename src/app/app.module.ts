import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './shared/routing/app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './components/verify-email/verify-email.component';
import {AuthService} from './core/services/auth.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContactMeComponent} from './components/contact-me/contact-me.component';
import {ContactService} from './core/services/contact.service';
import {FriendService} from './core/services/friend.service';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {FriendComponent} from './components/friend/friend.component';
import {FriendListComponent} from './components/friend-list/friend-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        NavbarComponent,
        FooterComponent,
        ContactMeComponent,
        ContactListComponent,
        FriendListComponent,
        FriendComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        Ng2SearchPipeModule
    ],
    providers: [
        AuthService,
        ContactService,
        FriendService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
