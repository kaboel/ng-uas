import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    faGoogle = faGoogle;
    faExclamationCircle = faExclamationCircle;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
    }

}
