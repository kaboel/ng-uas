import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    faGoogle = faGoogle;
    faExclamationCircle = faExclamationCircle;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
    }

}
