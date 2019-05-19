import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../core/helper/matcher.validator';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    registerForm: FormGroup;

    faGoogle = faGoogle;
    faExclamationCircle = faExclamationCircle;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            pwd: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            pwdVer: ['', [
                Validators.required
            ]]
        }, { validator: MustMatch('pwd', 'pwdVer') });
    }

    get key() { return this.registerForm.controls; }

}
