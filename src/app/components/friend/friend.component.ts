import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import {FriendService} from '../../core/services/friend.service';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

    friendForm: FormGroup;
    faPlus = faPlus;
    faExclamationCircle = faExclamationCircle;

    constructor(
        public formBuilder: FormBuilder,
        public friendService: FriendService
    ) {
    }

    ngOnInit() {
        this.friendForm = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(5),
            ]],
            email: ['', [
                Validators.required,
                Validators.email,
            ]],
            contact: ['', [
                Validators.required,
                Validators.pattern('[0-9]+')
            ]],
        });
    }

    get key() { return this.friendForm.controls; }

    onSubmit() {
        this.friendService.addFriend(this.friendForm.value);
        this.friendForm.reset();
    }

}
