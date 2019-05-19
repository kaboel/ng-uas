import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    faGoogle = faGoogle;
    faExclamationCircle = faExclamationCircle;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            pwd: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
        });
    }

    get key() { return this.loginForm.controls; }
}
