import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    faTimes = faTimes;
    faCheck = faCheck;

    constructor(
        public authService: AuthService,
    ) {}

    ngOnInit() {
    }

}
