import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    emailForm: FormGroup;
    faExclamationCircle = faExclamationCircle;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.emailForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email,
            ]]
        });
    }

    get email() { return this.emailForm.get('email'); }

    onSubmit() {
        this.authService.forgotPassword(this.email.value);
    }

}
