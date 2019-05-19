import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons/faRedoAlt';

@Component({
    selector: 'app-verify-email',
    templateUrl: './verify-email.component.html',
    styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

    faRedoAlt = faRedoAlt;

    constructor(public authService: AuthService) {
    }

    ngOnInit() {
    }

}
