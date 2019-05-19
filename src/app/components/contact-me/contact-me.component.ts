import {Component, OnInit} from '@angular/core';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

    contactMeForm: FormGroup;

    faExclamationCircle = faExclamationCircle;

    constructor(
        public formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        this.contactMeForm = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(5)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            message: ['', [
                Validators.required,
                Validators.minLength(80)
            ]]
        });
    }

    get key() { return this.contactMeForm.controls; }

}
